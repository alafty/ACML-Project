import { Schema, model } from "mongoose";

const adminSchema = new Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true,
  },
  PreferenceLevel: {
    type: Number,
    required: false
  }
}, { timestamps: true });

const admin = model('Admin', adminSchema);
export default admin;