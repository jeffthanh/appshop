import { sliderModel } from '../../models/slider/index.js';

// Controller to get all sliders
export const getAllSliders = async (req, res) => {
  try {
    // Sử dụng phương thức .find() của model để lấy tất cả các slider
    const sliders = await sliderModel.find();

    if (!sliders || sliders.length === 0) {
      return res.status(404).json({ message: 'Không có slider nào được tìm thấy' });
    }

    res.status(200).json(sliders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi lấy dữ liệu slider' });
  }
};

export default getAllSliders;
