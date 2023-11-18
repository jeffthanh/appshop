import { User } from '../../../models/user/index.js'; // Import model User
import bcrypt from 'bcrypt'; // Import thư viện bcrypt để hash và so sánh mật khẩu


export default async (req, res) => {
    try {
        const { oldPassword } = req.body; // Lấy mật khẩu cũ từ request body
        const { _id } = req.user; // Lấy _id của người dùng từ request user

        // Truy vấn cơ sở dữ liệu để lấy mật khẩu lưu trữ của người dùng
        const user = await User.findById(_id).select('+password').exec();

        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }

        // Kiểm tra xem user.password có được định nghĩa và mật khẩu cũ đã được cung cấp
        if (!user.password || !oldPassword) {
            return res.status(400).json({ message: 'Dữ liệu đầu vào không hợp lệ' });
        }

        // So sánh mật khẩu cũ mà người dùng nhập với mật khẩu lưu trữ
        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

        if (isPasswordValid) {
            return res.status(200).json({ isValid: true }); // Trả về kết quả nếu mật khẩu cũ hợp lệ
        } else {
            return res.status(401).json({ isValid: false }); // Trả về kết quả nếu mật khẩu cũ không hợp lệ
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Lỗi trong quá trình kiểm tra mật khẩu cũ' }); // Xử lý lỗi
    }
}
