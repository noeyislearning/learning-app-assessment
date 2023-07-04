import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a first name.",
  },
  lastName: {
    type: String,
    required: "Enter a last name.",
  },
  email: {
    type: String,
    require: "Enter an email address.",
  },
  company: {
    type: String,
    require: "Enter a company name.",
  },
  phone: {
    type: Number,
  },
}, { timestamps: true });