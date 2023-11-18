import { sliderModel } from '../../models/slider/index.js';

// Controller to create a new slider
export const createSlider = async (req, res) => {
  try {
    const { name } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Vui lòng tải lên hình ảnh' });
    }

    const image = req.file.path;

    const newSlider = new sliderModel({ name, image }); // Use sliderModel here

    await newSlider.save();

    res.status(201).json({newSlider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi tạo slider' });
  }
};


export default createSlider;
