import verifyAccessToken from "../middleware/verifyToken.js";
import { Router } from "express";
const router = Router();
import  createOrder  from "../controllers/order/create.js";
import  getOrder  from "../controllers/order/getorder.js";
import  getOrders  from "../controllers/order/getorders.js";
import  updatOrder  from "../controllers/order/updatestatus.js";
import controlJwt from "../middleware/controlJwt.js";

router.post('/',verifyAccessToken ,createOrder );
router.get('/:userid',verifyAccessToken ,getOrder );
router.get('/',verifyAccessToken ,getOrders );
router.put('/:id',controlJwt ,updatOrder );



export default router;
