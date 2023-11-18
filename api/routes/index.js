import { Router } from "express";
const router = Router();
import "express-async-errors";
import user from "./user.js";
import slider from "./slider.js";
import category from "./category.js";
import product from "./product.js";
import order from "./order.js";

router.use('/user', user);
router.use('/slider', slider);
router.use('/category', category);
router.use('/product', product);
router.use('/order', order);


export default router;