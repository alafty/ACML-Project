import { Schema, model } from "mongoose";
import Subtitle from "./subtitle";

const courseSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Subject: {
      type: String,
      required: true,
    },
    Subtitles: {
      type: [Subtitle.schema],
      default: [],
    },

    Instructor: {
      type: [String],
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    RatingCount: {
      type: Number,
      required: false,
      default : 0,
    },
    RatingAvg: {
      type: Number,
      required: false,
      default : 0,
    },
    Discount: {
      type: [{ Country: String, Percentage: Number }],
      required: false,
    },
    TotalHours: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const course = model("Course", courseSchema);
export default course;
