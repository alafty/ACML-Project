const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = require('./course')

const indivTraineeSchema = new Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true,
  },
  PurchasedCourses: {
    type: [Course],
    required: true
  }
}, { timestamps: true });

const inidvTrainee = mongoose.model('IndivTrainee', indivTraineeSchema);
module.exports = inidvTrainee;