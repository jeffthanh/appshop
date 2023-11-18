import { categoryModel } from '../../models/category/index.js';

// Controller to get all categories
export const getAllCategory = async (req, res) => {
  try {
    // Sử dụng phương thức .find() của model để lấy tất cả các slider
    const categories = await categoryModel.find();

    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: 'Không có category nào được tìm thấy' });
    }

    // Tạo một mảng mới chỉ chứa các đối tượng có trường 'name' và 'image'
    // const simplifiedcategories = categories.map((category) => ({
    //   name: category.name,
    //   image: category.image,
    // }));

    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi lấy dữ liệu category' });
  }
};

export default getAllCategory;
