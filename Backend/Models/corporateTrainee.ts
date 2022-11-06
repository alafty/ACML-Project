import { Schema, model } from "mongoose";

//MIGHT MERGE WITH INDIV TRAINEE AND MAKE A CORPORATE AS AN ATTRIBUTE
const corpTraineeSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    PurchasedCourses: {
      type: String,
      required: true,
    },
    Corporate: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
      default: "Egypt",
    },
  },
  { timestamps: true }
);

const corpTrainee = model("CorpTrainee", corpTraineeSchema);
export default corpTrainee;
