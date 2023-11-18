import { sliderModel } from '../../models/slider/index.js';

// Controller to delete a slider by ID
export const deleteSliderById = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID của slider cần xóa từ request params

    // Tìm slider theo ID và xóa nó
    const deletedSlider = await sliderModel.findByIdAndDelete(id);

    if (!deletedSlider) {
      return res.status(404).json({ message: 'Slider không tồn tại' });
    }

    res.status(200).json({ message: 'Xóa slider thành công', deletedSlider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi xóa slider' });
  }
};

export default deleteSliderById;
