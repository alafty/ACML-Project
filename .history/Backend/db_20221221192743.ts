import mongoose from "mongoose";
mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://alafty:alafty@mohamed-gad-task2-clust.sbedlj8.mongodb.net/EduDB?retryWrites=true&w=majority');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
