import { productModel } from '../../models/product/index.js';

export const getProductsById = async (req, res) => {
  try {
    const productId = req.params.productId; // Get the product ID from the URL parameter

    const product = await productModel.findById(productId);

    if (!product) {
      // Log an error message for debugging
      console.error(`No product found with ID: ${productId}`);
      return res.status(404).json({ message: 'Không có sản phẩm nào được tìm thấy' });
    }

    res.status(200).json(product); // Return the product, not an array of products
  } catch (error) {
    // Log the error for debugging
    console.error('Error while fetching product by ID:', error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi lấy sản phẩm' });
  }
};

export default getProductsById;
