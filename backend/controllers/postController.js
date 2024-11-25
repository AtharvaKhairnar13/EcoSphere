import Post from "../models/postModel.js";

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

// Controller to create a new post
export const createPost = async (req, res) => {
  try {
    const { userId, content, vector, sentiment, likes } = req.body;

    const newPost = new Post({
      user: userId,
      content,
      vector,
      sentiment,
      likes,
      date: new Date(),
    });

    await newPost.save(); // Save the new post to the database

    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Server error. Unable to create post." });
  }
};
