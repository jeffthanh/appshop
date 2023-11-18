import { Router } from "express";
const router = Router();
import  createCategory  from "../controllers/category/create.js";
import getAllcategories from "../controllers/category/getcategory.js";
import controlJwt from "../middleware/controlJwt.js";
import  uploader  from "../middleware/cloudinary.config.js";
import  getProductsByCategory  from "../controllers/product/getbycategory.js";
import  updateCategoryById  from "../controllers/category/update.js";
import  deleteCategoryById  from "../controllers/category/delete.js";
import  getIdCategory  from "../controllers/category/getidcategory.js";

router.post('/', controlJwt, createCategory);
router.get('/',getAllcategories);
router.get('/id', getIdCategory);
router.get('/:categoryId',getProductsByCategory);

router.put('/:id', controlJwt, updateCategoryById);
router.delete('/:id', controlJwt,deleteCategoryById);


export default router;
