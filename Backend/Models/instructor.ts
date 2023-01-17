import { Schema, model } from "mongoose";
import course from "./course";
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
      default: 0
    },
    Courses: {
      type: [Schema.Types.ObjectId],
      ref: 'Course',
      required: false,
      default:[]
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
    }
  },
  { timestamps: true }
);

const instructor = model("Instructor", instructorSchema);
export default instructor;
