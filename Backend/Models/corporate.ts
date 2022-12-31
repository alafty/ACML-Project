import { truncate } from "fs";
import mongoose, { Schema, model, Mongoose } from "mongoose";
import Package from "../Models/package";

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
    PackageID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Package'
    }
  },
  { timestamps: true }
);

const corporate = model("Corporate", corporateSchema);
export default corporate;
