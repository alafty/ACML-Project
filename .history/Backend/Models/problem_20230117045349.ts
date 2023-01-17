import { truncate } from "fs";
import { Schema, model, Mongoose } from "mongoose";
import course from './course';
import instructor from './instructor'
import inidvTrainee from "./individualTrainee";
import corpTrainee from "./corporateTrainee";

const problemSchema = new Schema(
  {
    Type: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Status: {
        type: String,
        required: true
    },
    Course: {
        //type: course.schema,
        //type : String,
        //required: true
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Course'
    },
    Sender: {
        //type: corpTrainee.schema || instructor.schema || inidvTrainee.schema,
        //type : String,
        //required: true
        type: Schema.Types.ObjectId,
        required: true    }
  },
  { timestamps: true }
);

const problem = model("Problem", problemSchema);
export default problem;
