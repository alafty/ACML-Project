import { Schema, model } from "mongoose";

const countrySchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
      default: "Egypt",
    },
    Rate: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const country = model("Country", countrySchema);
export default country;
