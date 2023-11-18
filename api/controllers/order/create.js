import { OrderModel } from '../../models/order/index.js';

// Tạo một đơn hàng mới
export const createOrder = async (req, res) => {
    try {
        const { products, customer, payment } = req.body;

        // Kiểm tra nếu có đủ thông tin để tạo đơn hàng
        if (!products || !customer) {
            return res.status(400).json({ message: 'Thiếu thông tin đơn hàng hoặc thông tin khách hàng.' });
        }

        // Tạo một đối tượng đơn hàng mới
        const newOrderData = {
            products,
            customer,
        };

        // Thêm thông tin thanh toán nếu có
        if (payment) {
            newOrderData.payment = payment;
        }

        const newOrder = new OrderModel(newOrderData);

        // Lưu đơn hàng vào cơ sở dữ liệu
        await newOrder.save();

        return res.status(201).json({ message: 'Đơn hàng đã được tạo thành công.' });
    } catch (error) {
        console.error('Lỗi khi tạo đơn hàng:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
    }
};

export default createOrder;
