import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
}, { timestamps: true });

const Category = mongoose.model('categories', categorySchema);

export const categoryModel = Category;
export const schemaCategory = categorySchema;
