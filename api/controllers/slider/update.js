import { sliderModel } from '../../models/slider/index.js';

// Controller to update a slider by ID
export const updateSliderById = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID của slider cần cập nhật từ request params
    const { name } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Vui lòng tải lên hình ảnh' });
    }

    const image = req.file.path;

    // Tìm slider theo ID và cập nhật dữ liệu
    const slider = await sliderModel.findByIdAndUpdate(id, { name, image }, { new: true });

    if (!slider) {
      return res.status(404).json({ message: 'Slider không tồn tại' });
    }

    res.status(200).json({ message: 'Cập nhật slider thành công', updatedSlider: slider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật slider' });
  }
};

export default updateSliderById;
