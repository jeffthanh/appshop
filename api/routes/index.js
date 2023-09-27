import { Router } from "express";
const router = Router();
import "express-async-errors";
import user from "./user.js";

router.use('/user', user);

export default router;