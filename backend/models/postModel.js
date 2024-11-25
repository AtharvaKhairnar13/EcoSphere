import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    postId: {
      type: String,
      unique: true, // Ensures each post has a unique ID
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Refers to the user who posted it
      required: true,
    },
    content: {
      type: String, // The actual content of the post
      required: true,
    },
    vector: {
      type: [Number], // Array of floats representing the vector
      required: true,
    },
    sentiment: {
      type: String, // Sentiment of the post (e.g., "positive", "negative", "neutral")
      enum: ["positive", "negative", "neutral"], // Ensure only these values are allowed
      required: true,
    },
    likesCount: {
      type: Number, // Number of likes the post has received
      default: 0,
    },
    date: {
      type: Date, // Date and time of the post
      required: true,
      default: Date.now, // Automatically sets the current date and time
    },
  },
  { timestamps: true, collection: "postStore" } // Automatically adds createdAt and updatedAt fields
);

const Post = model("Post", postSchema);

export default Post;
