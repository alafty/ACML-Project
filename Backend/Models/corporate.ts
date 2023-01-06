import { Schema, model, Mongoose } from "mongoose";

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
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Package'
    }
  },
  { timestamps: true }
);

const corporate = model("Corporate", corporateSchema);
export default corporate;
