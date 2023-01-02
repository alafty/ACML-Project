import { Schema, model } from "mongoose";
import Discount from "./discount";
import Subtitle from "./subtitle";
import instructor from "./instructor";

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
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Instructor'
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
    Discounts: {
      type: [Discount.schema],
      required: false,
      default: [],
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
