const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Rating: {
    type: Number,
    required: true
  },
}, { timestamps: true });

const course = mongoose.model('Course', courseSchema);
module.exports = course;