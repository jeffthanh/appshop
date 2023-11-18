import { Router } from "express";
const router = Router();
import  createProduct  from "../controllers/product/create.js";
import controlJwt from "../middleware/controlJwt.js";
import  uploader  from "../middleware/cloudinary.config.js";
import  getProductsById  from "../controllers/product/getproductbyid.js";
import getProducts from "../controllers/product/getproducts.js";
import updateProductById from "../controllers/product/update.js";
import deleteProductById from "../controllers/product/delete.js";


router.post('/', controlJwt, createProduct);
router.get('/',getProducts);
router.get('/:productId',getProductsById);
router.put('/:id' ,controlJwt, updateProductById );
router.delete('/:id',controlJwt, deleteProductById);
export default router;
