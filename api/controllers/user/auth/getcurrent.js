import asyncHandler from 'express-async-handler';
import { User } from '../../../models/user/index.js';

export default asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id).select('email fullname address phone image role');
    res.status(200).json(user);
});
