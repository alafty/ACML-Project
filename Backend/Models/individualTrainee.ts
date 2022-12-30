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
    type: [Object],
    required: false
  },
  Wallet: {
    type: Number,
    required: false,
    default: 0
  }
}, { timestamps: true });

const inidvTrainee = model('IndivTrainee', indivTraineeSchema);
export default inidvTrainee;