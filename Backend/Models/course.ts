import mongoose, { Schema, model } from "mongoose";
import Discount from "./discount";
import Subtitle from "./subtitle";
import instructor from "./instructor";
import quiz from "./quiz";

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
    Quizzes: {
      type: [quiz.schema],
      default: []
    },
    Description: {
      type: String,
      required: true
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
    },
    PurchaseCount: {
      type: Number,
      required: false,
      default: 0
    }
  },
  { timestamps: true }
);

const course = model("Course", courseSchema);
export default course;
