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
    VideoId: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

const course = model("Course", courseSchema);
export default course;
