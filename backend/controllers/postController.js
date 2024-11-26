import Post from "../models/postModel.js";
import asyncHandler from '../middlewares/asyncHandler.js';
import { generateVector, analyzeSentiment } from "../utils/postUtils.js";
import User from "../models/userModel.js";
// Controller to get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts from the database
    res.status(200).json(posts); // Respond with the posts in JSON format
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error. Unable to fetch posts." });
  }
};

export const createPost = asyncHandler(async (req, res) => {
  try {
    const { message } = req.body;
    console.log(req);
    const userEmail = req.userEmail; // Assuming you pass the email or userId in the request
    console.log(userEmail);
    // Ensure message and user are present
    if (!message) {
      return res.status(400).json({ error: "Missing message" });
    }
    if(!userEmail){
      return res.status(400).json({ error: "Missing userEmail" });
    }

    // Fetch the user from the database using the email or userId
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate vector and analyze sentiment (if needed)
    const vector = generateVector(message);  // Example utility function to generate vector
    const sentiment = analyzeSentiment(message); // Example utility function to analyze sentiment

    // Create the new post
    const newPost = new Post({
      postId: new Date().toISOString(),
      user: user._id, // Associate post with the user
      content: message,
      vector, // The vector generated from message
      sentiment, // The sentiment of the message
      likesCount: 0,
      date: new Date(),
    });

    // Save the post to the database
    await newPost.save();

    // Respond with the created post
    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error in createPost:", error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
});