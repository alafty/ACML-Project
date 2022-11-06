const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = require("./course");

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
    NumberOfCourses: {
      type: Number,
      required: true,
    },
    Courses: {
      type: String,
      required: true,
    },
    Rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const instructor = mongoose.model("Instructor", instructorSchema);
module.exports = instructor;
