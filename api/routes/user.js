import { Router } from "express";
import { registerUser, loginUser ,currentUser,getidcurrent,getscurrent , updatuser ,updatepassword ,verifypass} from '../controllers/user/index.js';
const router = Router();
import verifyAccessToken from "../middleware/verifyToken.js";
import controlJwt from "../middleware/controlJwt.js";

router.post("/", registerUser);
router.post('/login',loginUser);
router.get('/',verifyAccessToken ,currentUser );
router.get('/all',controlJwt ,getscurrent );

router.get('/:id',verifyAccessToken ,getidcurrent );

router.put('/',verifyAccessToken, updatuser );
router.put('/password',verifyAccessToken, updatepassword );
router.post('/password',verifyAccessToken,verifypass);


export default router;