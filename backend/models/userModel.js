import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    country: {
      type: String, // Can be linked to a country collection if needed
      required: true,
    },
    dob: {
      type: Date,
      required: false, // Optional: Set to true if Date of Birth is mandatory
    },
    phone: {
      type: String,
      required: false,
      match: [/^\+?[1-9]\d{1,14}$/, 'Please provide a valid phone number'], // E.164 format validation
    },
    address: {
      type: String,
      required: false,
      trim: true,
    },
    profileImage: {
      type: String, // Stores URL or file path for the profile image
      required: false,
    },
    notifications: {
      type: Boolean,
      default: true, // Default to true if email notifications are enabled by default
    },
    vector: {
      type: [Number], // Array of floats representing the vector
      required: true,
    },
    
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
