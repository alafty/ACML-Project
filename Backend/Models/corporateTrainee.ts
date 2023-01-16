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
      type: [Schema.Types.ObjectId],
      required: false,
      ref: 'Course'
    },
    Corporate: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Corporate'
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
