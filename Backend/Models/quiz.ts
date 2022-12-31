import { truncate } from "fs";
import { Schema, model, Mongoose } from "mongoose";
import question from "./questionBank";

const quizSchema = new Schema(
  {
    Count: {
      type: Number,
      required: true,
    },
    Questions: {
      type: [question.schema.obj],
     // required: true,
    },
    Course: {
      type: String,
    //   required: true,
    },
  },
  { timestamps: true }
);

const quiz = model("Quiz", quizSchema);
export default quiz;
