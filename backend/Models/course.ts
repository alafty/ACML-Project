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
      required: true,
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
