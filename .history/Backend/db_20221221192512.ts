import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://alafty:alafty@mohamed-gad-task2-clust.sbedlj8.mongodb.net/EduDB?retryWrites=true&w=majority');
    mongoose.set('strictQuery', true)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
