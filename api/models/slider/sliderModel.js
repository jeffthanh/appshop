import mongoose from 'mongoose';

const sliderSchema = mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
}, { timestamps: true });

const Slider = mongoose.model('sliders', sliderSchema);

export const sliderModel = Slider;
export const schemaSlider = sliderSchema;
