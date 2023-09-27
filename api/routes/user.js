import { Router } from "express";
import controlJwt from "../middleware/controlJwt.js";
import { registerUser, loginUser, currentUser } from '../controllers/user/index.js';
const router = Router();

router.post("/", registerUser);
router.post('/login',loginUser);
router.get('/', controlJwt , currentUser);


export default router;