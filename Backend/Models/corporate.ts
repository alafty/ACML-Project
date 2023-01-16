import { Schema, model, Mongoose } from "mongoose";

const corporateSchema = new Schema(
  {
    Username: {
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
        ref: 'Package',
        default: '63b82228fda53129cb7b0a9f'
    }
  },
  { timestamps: true }
);

const corporate = model("Corporate", corporateSchema);
export default corporate;
