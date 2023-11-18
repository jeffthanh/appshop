import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
  products: [
    {
      name: String,
      price: Number,
      quantity: Number,
      image:String,
    }
  ],
  customer: {
    address: String,
    fullname: String,
    phone: String,
    _id: mongoose.Schema.Types.ObjectId, // Thêm _id của khách hàng vào đây
    // Các thông tin khác về khách hàng (nếu cần)
  },
  status: {
    type: String,
    enum: ['Chờ xử lý', 'Đang giao hàng', 'Đã hủy', 'Thành công'], // Thêm các trạng thái khác nếu cần
    default: 'Chờ xử lý',
  },
  payment: {
    type: String,
    enum: ['Thanh toán ví vnpay', 'Chuyển khoản ngân hàng', 'Thanh toán tiền mặt'], // Thêm các trạng thái khác nếu cần
    default: 'Thanh toán tiền mặt',
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const Order = mongoose.model('orders', OrderSchema);

export const OrderModel = Order;
export const schemaOrder = OrderSchema;
