import { Schema, model } from "mongoose";

const campaignSchema = new Schema(
  {
    campaignId: {
      type: String,
      unique: true, // Ensures each campaign has a unique ID
      required: true,
    },
    name: {
      type: String, // Name of the campaign
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Refers to the user who created the campaign
      required: true,
    },
    dateCreated: {
      type: Date, // Date and time the campaign was created
      required: true,
      default: Date.now, // Automatically sets the current date and time
    },
    country: {
      type: String, // Country where the campaign was created
      required: true,
    },
    participants: [
      {
        type: Schema.Types.ObjectId, // List of users who joined the campaign
        ref: "User",
      },
    ],
  },
  { timestamps: true, collection: "campaignStore" } // Automatically adds createdAt and updatedAt fields
);

const Campaign = model("Campaign", campaignSchema);

export default Campaign;
