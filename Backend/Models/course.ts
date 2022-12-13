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
    Exercises: {
      type: [String],
      required: true,
    },
    Instructor: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Rating: {
      type: Number,
      required: false,
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
