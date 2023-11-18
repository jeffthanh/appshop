import { OrderModel } from '../../models/order/index.js';

// Controller to update a order by ID
export const updatOrder = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID của order cần cập nhật từ request params
    const { status } = req.body;

  

    // Tìm order theo ID và cập nhật dữ liệu
    const order = await OrderModel.findByIdAndUpdate(id, {status}, { new: true });

    if (!order) {
      return res.status(404).json({ message: 'order không tồn tại' });
    }

    res.status(200).json({ message: 'Cập nhật order thành công', updatedorder: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật order' });
  }
};

export default updatOrder;
