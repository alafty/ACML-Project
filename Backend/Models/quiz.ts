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
      type: [question],
      required: true,
    }
  },
  { timestamps: true }
);

const quiz = model("Quiz", quizSchema);
export default quiz;
