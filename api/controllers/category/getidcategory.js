import { categoryModel } from '../../models/category/index.js';

// Update the controller to get a category by name
export const getIdCategory = async (req, res) => {
  try {
    const { name } = req.query; // Use req.query to get parameters from the query string

    // Use findOne to find a single document by the name
    const category = await categoryModel.findOne({ name: name });
    console.log(category)
    if (!category) {
      return res.status(404).json({ message: 'Không có category nào được tìm thấy' });
    }

    // Return only the _id field
    res.status(200).json({ _id: category._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi lấy dữ liệu category', error: error.message });
  }
};


export default getIdCategory;
