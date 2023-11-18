import jsonwebtoken from 'jsonwebtoken';
import { User } from '../models/user/index.js';

export const controlJwt = async (req, res, next) => {
  let token = req.get('authorization');
  let data = "";
  if (token) {
      token = token.split(" ")[1];
      try {
          data = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
          const user = await User.findById(data._id);
          
          if (!user) {
              return res.status(401).send({ error: 'User not found' });
          }

          // Kiểm tra vai trò của người dùng
          if (user.role !== 'admin') {
              return res.status(403).send({ error: 'Unauthorized: Requires admin role' });
          }

          req.user = user;
          next();
      } catch (e) {
          return res.status(401).send({ error: 'Bad token provided' });
      }
  } else {
      return res.status(400).send({
          error: 'Authorization header is missing',
      });
  }
}

export default controlJwt;

