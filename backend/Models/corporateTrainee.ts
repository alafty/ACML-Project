import mongoose from "mongoose";
const Schema = mongoose.Schema;
import course from "./course";
//MIGHT MERGE WITH INDIV TRAINEE AND MAKE A CORPORATE AS AN ATTRIBUTE
const corpTraineeSchema = new Schema({
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
  },
  Corporate:{
    type: String,
    required: true
  }
}, { timestamps: true });

const corpTrainee = mongoose.model('CorpTrainee', corpTraineeSchema);
module.exports = corpTrainee;