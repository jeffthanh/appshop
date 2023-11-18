import jsonwebtoken from 'jsonwebtoken';
import * as dotenv from 'dotenv'
dotenv.config()
export async function signAccessToken(userId,role) {
    const authorization = jsonwebtoken.sign({ _id: userId,role: role }, process.env.JWT_SECRET_KEY, { expiresIn: '2h' });
    return authorization;
}