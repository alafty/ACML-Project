import { Schema, model } from "mongoose";

const questionBankSchema = new Schema(
  {
    Question: {
      type: String,
      required: true,
    },
    Choices1: {
      type: String,
      required: true,
    },
    Choices2: {
      type: String,
      required: true,
    },
    Choices3: {
      type: String,
      required: true,
    },
    Choices4: {
      type: String,
      required: true,
    },
    Answer: {
      type: String,
      required: true,
    },

    Course: {
      type: String,
    //   required: true,
    },
    QuizID: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const course = model("QuestionBank", questionBankSchema);
export default course;
