import { Schema, model } from "mongoose";

const instructorSchema = new Schema(
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
    ShortBio: {
      type: String,
      required: true
    },
    NumberOfCourses: {
      type: Number,
      required: false,
    },
    Courses: {
      type: [String],
      required: false,
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
    Country: {
      type: String,
      required: false,
      default: "Egypt",
    },
  },
  { timestamps: true }
);

const instructor = model("Instructor", instructorSchema);
export default instructor;
