import { OrderModel } from '../../models/order/index.js';

export const getOrders = async (req, res) => {
  try {
    const userid = req.params.userid; // Lấy userid từ URL

    const orders = await OrderModel.find({ "customer._id": userid }); // Tìm tất cả đơn hàng của người dùng với userid
    
    if (orders) {
      return res.status(200).json(orders); // Trả về danh sách đơn hàng trực tiếp
    } else {
      return res.status(404).json({
        success: false,
        response: 'No orders found'
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      response: 'Something went wrong'
    });
  }
};

export default getOrders;
