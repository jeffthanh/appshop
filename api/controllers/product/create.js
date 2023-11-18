import { productModel } from '../../models/product/index.js';

// Controller to create a new product with image
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, special,percent,images } = req.body;



    const newProduct = new productModel({ name, description, price,  images, category, special,percent });

    await newProduct.save();

    res.status(201).json({ newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi tạo sản phẩm' });
  }
};

export default createProduct;