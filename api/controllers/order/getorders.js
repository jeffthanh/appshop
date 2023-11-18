import { OrderModel } from '../../models/order/index.js';

export const getOrders = async (req, res) => {
  try {
    // Sử dụng phương thức .find() của model để lấy tất cả các slider
    const order = await OrderModel.find();

    if (!order || order.length === 0) {
      return res.status(404).json({ message: 'Không có order nào được tìm thấy' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi lấy dữ liệu order' });
  }
};

export default getOrders;
