import { truncate } from "fs";
import { Schema, model, Mongoose } from "mongoose";
import  Package  from './package'

const corporateSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Industry: {
      type: String,
      required: true,
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Package: {
        type: Package.schema,
        required: true
    }
  },
  { timestamps: true }
);

const corporate = model("Corporate", corporateSchema);
export default corporate;
