import { categoryModel } from '../../models/category/index.js';

// Controller to delete a slider by ID
export const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID của slider cần xóa từ request params

    // Tìm slider theo ID và xóa nó
    const deleteCategory = await categoryModel.findByIdAndDelete(id);

    if (!deleteCategory) {
      return res.status(404).json({ message: 'Slider không tồn tại' });
    }

    res.status(200).json({ message: 'Xóa slider thành công', deleteCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi xóa slider' });
  }
};

export default deleteCategoryById;
