import { Schema, model } from "mongoose";

const indivTraineeSchema = new Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true,
  },
  PurchasedCourses: {
    type: String,
    required: true
  }
}, { timestamps: true });

const inidvTrainee = model('IndivTrainee', indivTraineeSchema);
export default inidvTrainee;