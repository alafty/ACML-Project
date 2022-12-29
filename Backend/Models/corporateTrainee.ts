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
      type: [Object],
      required: false,
    },
    Corporate: {
      type: String,
      required: true,
    },
    Wallet: {
      type: Number,
      required: false,
      default: 0
    }
  },
  { timestamps: true }
);

const corpTrainee = model("CorpTrainee", corpTraineeSchema);
export default corpTrainee;
