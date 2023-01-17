import { truncate } from "fs";
import { Schema, model, Mongoose } from "mongoose";
import question from "./questionBank";

const quizSchema = new Schema(
  {
    Order: {
      type: Number,
      required: true,
    },
    Questions: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref : 'QuestionBank'
    }
  },
  { timestamps: true }
);

const quiz = model("Quiz", quizSchema);
export default quiz;
