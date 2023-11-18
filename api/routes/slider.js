import { Router } from "express";
const router = Router();
import  createSlider  from "../controllers/slider/create.js";
import getAllSliders from "../controllers/slider/getslider.js";
import controlJwt from "../middleware/controlJwt.js";
import  uploader  from "../middleware/cloudinary.config.js";
import updateSliderById from "../controllers/slider/update.js";
import deleteSliderById from "../controllers/slider/detele.js"; // Import controller xóa slider



router.post('/', controlJwt, uploader.single('image'), createSlider);
router.get('/',getAllSliders);
router.put('/:id',controlJwt,uploader.single('image'),updateSliderById);
router.delete('/:id', controlJwt, deleteSliderById); // Thêm route xóa slider

export default router;
