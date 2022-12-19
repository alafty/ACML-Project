import { Schema, model } from "mongoose";
import { number } from "zod";

const questionBankSchema = new Schema(
  {
    Question: {
      type: String,
      required: true,
    },
    Choices: {
      type: [String],
      required: true,
    },
    Answer: {
      type: String,
      required: true,
    },
    Grade: {
      type: Number,
      required: true,
    },

    Course: {
      type: String,
    //   required: true,
    },
    QuizID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const course = model("QuestionBank", questionBankSchema);
export default course;
