import { User } from '../../../models/user/index.js';

// Controller để cập nhật người dùng bằng ID
export default async (req, res) => {
  try {
    const { _id } = req.user;
    const { fullname, address, phone,image} = req.body;

    // Tạo một đối tượng mới chứa dữ liệu cập nhật
    const updatedUserData = {
      fullname,
      address,
      phone,
      image
    };

    // Tìm người dùng theo ID và cập nhật dữ liệu
    const updatedUser = await User.findByIdAndUpdate(_id, updatedUserData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }

    res.status(200).json({ message: 'Cập nhật người dùng thành công', updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật người dùng' });
  }
};

