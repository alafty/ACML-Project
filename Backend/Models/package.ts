import { truncate } from "fs";
import { Schema, model, Mongoose } from "mongoose";

const packageSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    TraineeCount: {
      type: Number,
      required: true,
    },
    CoursesPerTrainee: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }
  },
  { timestamps: true }
);

const Package = model("Package", packageSchema);
export default Package;
