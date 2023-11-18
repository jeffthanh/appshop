import asyncHandler from 'express-async-handler';
import { User } from '../../../models/user/index.js';

export default asyncHandler(async (req, res, next) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            res.status(404).json({ message: 'Không có người dùng được tìm thấy.' });
        } else {
            res.status(200).json(users);
        }
    } catch (error) {
        next(error);
    }
});
