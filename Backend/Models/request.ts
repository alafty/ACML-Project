import { truncate } from "fs";
import { Schema, model, Mongoose } from "mongoose";
const requestSchema = new Schema(
  {
    TraineeID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "CorporateTrainee"
    },
    CourseID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Course"
    },
    CorporateID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Corporate"
    }
  },
  { timestamps: true }
);

const request = model("Request", requestSchema);
export default request;
