import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://foodix:aI2KAS2yx@cluster0.ldo2dv5.mongodb.net/food_delivery_website'
    )
    .then(() => console.log('DB Connected'));
};
