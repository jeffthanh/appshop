import { categoryModel } from '../../models/category/index.js';

// Controller to update a category by ID
export const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID của category cần cập nhật từ request params
    const { name,image } = req.body;

  

    // Tìm category theo ID và cập nhật dữ liệu
    const category = await categoryModel.findByIdAndUpdate(id, { name, image }, { new: true });

    if (!category) {
      return res.status(404).json({ message: 'category không tồn tại' });
    }

    res.status(200).json({ message: 'Cập nhật category thành công', updatedcategory: category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật category' });
  }
};

export default updateCategoryById;
