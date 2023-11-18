import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  percent:{
    type:Number,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Liên kết với model danh mục (nếu có)
  },
  special: {
    type: Boolean,
    default: false, // Giá trị mặc định là false
  },
  // Thêm các trường khác tùy theo yêu cầu của ứng dụng
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export const productModel = Product;
export const schemaProduct = productSchema;
