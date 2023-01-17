import { Schema, model } from "mongoose";
import course from "./course";






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
    //the number refers to the trainee's progress in each course
      type: [Schema.Types.ObjectId,Number],
      required: false,
      ref: 'Course'
  },
  Wallet: {
    type: Number,
    required: false,
    default: 0
  }
}, { timestamps: true });

const inidvTrainee = model('IndivTrainee', indivTraineeSchema);
export default inidvTrainee;