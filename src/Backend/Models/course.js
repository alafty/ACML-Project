const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Instructor = require('./instructor')

const courseSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Instructor: {
    type: Instructor,
    required: true
  },
  Price: {
    type: Number,
    required: true,
  },
  Rating: {
    type: Number,
    required: true
  },
  Discount:{
    type: Number,
    required: true
  }
}, { timestamps: true });

const course = mongoose.model('Course', userSchema);
module.exports = course;