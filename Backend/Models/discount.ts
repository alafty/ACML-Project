import { Schema, model } from "mongoose";
import Subtitle from "./subtitle";

const discountSchema = new Schema(
  {
    Duration: {
        type: Number,
        required: false,
        default: 0
    },
    Percentage: {
        type: Number,
        required: true,
    }
  },
  { timestamps: true }
);

const Discount = model("Discount", discountSchema);
export default Discount;
