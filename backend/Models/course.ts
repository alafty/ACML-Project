import { Schema, model } from "mongoose";

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
    Subtitle: {
      type: String,
      required: false,
    },
    Description: {
      type: String,
      required: false,
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
    },
    Discount: {
      type: Number,
    },
    TotalHours: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

const course = model("Course", courseSchema);
export default course;
