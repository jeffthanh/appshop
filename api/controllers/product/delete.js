import { productModel } from '../../models/product/index.js';

// Controller to delete a product by ID
export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID của product cần xóa từ request params

    // Tìm product theo ID và xóa nó
    const deleteProduct = await productModel.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.status(404).json({ message: 'product không tồn tại' });
    }

    res.status(200).json({ message: 'Xóa product thành công', deleteProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi xóa product' });
  }
};

export default deleteProductById;
