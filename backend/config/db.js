import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'xxx'
    )
    .then(() => console.log('DB Connected'));
};
