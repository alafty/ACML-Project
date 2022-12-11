import { Schema, model } from "mongoose";

const subtitleSchema = new Schema(
  {
    VideoId: {
      type: String,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Subtitle = model("Subtitle", subtitleSchema);
export default Subtitle;
