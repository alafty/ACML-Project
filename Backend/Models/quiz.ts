import { truncate } from "fs";
import { Schema, model, Mongoose } from "mongoose";
import question from "./questionBank";

const quizSchema = new Schema(
  {
    Order: {
      type: String,
      required: false,
    },
    Questions: {
      type: [Object],
      required: true,
      ref : 'QuestionBank'
    }
  },
  { timestamps: true }
);

const quiz = model("Quiz", quizSchema);
export default quiz;
