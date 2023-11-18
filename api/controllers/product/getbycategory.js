import { productModel } from '../../models/product/index.js';

export const getProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const { sort } = req.query; // Get the sorting parameter from the query string

    let query = productModel.find({ category: categoryId });

    // Apply sorting if the sort parameter is provided
    if (sort) {
      // Assuming sort parameter is something like "name" or "-price"
      query = query.sort(sort);
    }

    const products = await query.exec();

    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'Không có sản phẩm nào được tìm thấy trong danh mục này' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi lấy sản phẩm theo danh mục' });
  }
};

export default getProductsByCategory;
