import mongoose from "mongoose";
const Schema = mongoose.Schema;
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
    type: [course],
    required: true
  }
}, { timestamps: true });

const inidvTrainee = mongoose.model('IndivTrainee', indivTraineeSchema);
module.exports = inidvTrainee;