import asyncHandler from 'express-async-handler';
import { User } from '../../../models/user/index.js';

export default asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id)
    res.status(200).json(user);
});
