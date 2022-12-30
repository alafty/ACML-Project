import { Schema, model } from "mongoose";
import { number } from "zod";

const questionBankSchema = new Schema(
  {
    Question: {
      type: String,
      required: true,
    },
    Choice1: {
      type: String,
      required: true,
    },
    Choice2: {
      type: String,
      required: true,
    },
    Choice3: {
      type: String,
      required: true,
    },
    Choice4: {
      type: String,
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

const question = model("QuestionBank", questionBankSchema);
export default question;