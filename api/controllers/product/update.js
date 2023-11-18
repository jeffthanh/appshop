import { productModel } from '../../models/product/index.js';

// Controller to update a product by ID
export const updateProductById = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID của product cần cập nhật từ request params
    const { name, description, price, category, special,images } = req.body;

    // Tìm product theo ID và cập nhật dữ liệu
    const updatedProduct = await productModel.findByIdAndUpdate(id,  { name, description, price, category, special,images }, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
    }

    res.status(200).json({ message: 'Cập nhật sản phẩm thành công', updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật sản phẩm' });
  }
};

export default updateProductById;
