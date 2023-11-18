import { categoryModel } from '../../models/category/index.js';

// Controller to create a new slider
export const createCategory = async (req, res) => {
  try {
    const { name ,image } = req.body;

    if(!name || !image){
      return res.status(400).json({ message: 'Vui lòng nhập dữ liệu' });
    }

    const newCategory = new categoryModel({ name, image }); // Use sliderModel here

    await newCategory.save();
    console.log('Data:', name, image);

    res.status(201).json({newCategory });
    if (response.status === 201) {
      console.log('Danh mục đã được thêm thành công.');
      console.log(newCategory);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi tạo slider' });
  }
};


export default createCategory;
