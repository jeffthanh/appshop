import bcryptjs from "bcryptjs";
import { User } from '../../../models/user/index.js';

// Controller để cập nhật người dùng bằng ID
export default async (req, res) => {
  try {
    const { _id } = req.user;
    const newPassword = req.body.password;
    console.log('New Password:', newPassword);

    // Tạo một bản hash từ mật khẩu mới
    const hashedPassword = await bcryptjs.hash(newPassword, 10);

    // Tìm người dùng theo ID và cập nhật dữ liệu, bao gồm cập nhật mật khẩu đã hash
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { password: hashedPassword },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }

    res.status(200).json({ message: 'Cập nhật người dùng thành công', updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật người dùng' });
  }
};
