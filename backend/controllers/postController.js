import Post from "../models/postModel.js";
import asyncHandler from '../middlewares/asyncHandler.js';
import User from "../models/userModel.js";
import queryHuggingFace from "../utils/postUtils.js";
import SentimentHuggingFace from "../utils/postSenti.js";

// In utils/similarityUtils.js
export const calculateCosineSimilarity = (vector1, vector2) => {
  const dotProduct = vector1.reduce((acc, value, index) => acc + value * vector2[index], 0);
  const magnitude1 = Math.sqrt(vector1.reduce((acc, value) => acc + value * value, 0));
  const magnitude2 = Math.sqrt(vector2.reduce((acc, value) => acc + value * value, 0));
  return dotProduct / (magnitude1 * magnitude2); // Cosine similarity formula
};
function removeEmojis(text) {
  return text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\x00-\x7F]/g, '');
}


// Controller to get all posts
export const getAllPosts = async (req, res) => {
  try {
    const userEmail = req.userEmail;// Get the userId from the authenticated request (assuming user is authenticated)
    
    if (!userEmail) {
      return res.status(400).json({ error: "Missing Message or userEmail" });
    }
    // Fetch the user document to get their vector
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const userVector = user.vector; // Get the user's vector from the user document
    // Fetch all posts and populate user data (username, email)
    const posts = await Post.find()
      .populate("user", "username email")
      .exec();

    // Calculate similarity scores and add them to each post
    const postsWithScores = posts.map((post) => {
      const postVector = post.vector; // Post vector
      const score = calculateCosineSimilarity(userVector, postVector); // Calculate cosine similarity between user vector and post vector
      return { post, score }; // Return post along with its score
    });

    // Sort the posts based on the similarity score in descending order
    postsWithScores.sort((a, b) => b.score - a.score);

    // Extract the posts from the sorted array
    const sortedPosts = postsWithScores.map((item) => item.post);
    // Return the sorted posts
    res.status(200).json(sortedPosts);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const getMyPosts = async (req, res) => {
  try {
      const userEmail = req.userEmail; // Assuming authenticateUser middleware sets this
      if (!userEmail) {
          return res.status(400).json({ error: "User email is missing." });
      }
      const user = await User.findOne({ email: userEmail });
      if (!user) {
          return res.status(404).json({ error: "User not found." });
      }
      const userId = user._id;
      const posts = await Post.find({ user: userId }).populate("user", "username email")
      .exec();
      return res.status(200).json(posts);
  } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Error fetching user posts." });
  }
};



export const createPost = asyncHandler(async (req, res) => {
  try {
    const { message } = req.body;
    const userEmail = req.userEmail;  // Assuming req.userEmail is set from authentication middleware

    // Ensure message and user are present
    if (!message || !userEmail) {
      return res.status(400).json({ error: "Missing message or userEmail" });
    }

    // Fetch the user from the database using the email
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Clean message from emojis
    const cleanedMessage = removeEmojis(message);

    // Fetch vector (an array of scores) from Hugging Face model
    const analysisResult = await queryHuggingFace(cleanedMessage);
    if (!analysisResult) {
      return res.status(500).json({ error: "Failed to analyze message vector" });
    }
    
    // Extract only the scores from the analysis result
    const vector = analysisResult.map((item) => item.score);  // Assuming 'score' is the field containing the vector values

    // Perform sentiment analysis using SentimentHuggingFace
    const sentimentResult = await SentimentHuggingFace(cleanedMessage);
    if (!sentimentResult) {
      return res.status(500).json({ error: "Sentiment analysis failed" });
    }

    // Extract the sentiment label ("positive", "negative", or "neutral")
    const sentiment = sentimentResult === 'positive' || sentimentResult === 'negative'
      ? sentimentResult
      : 'neutral'; // Default to 'neutral' if not positive or negative

    // Create the new post
    const newPost = new Post({
      postId: new Date().toISOString(), // Using ISO string as unique postId
      user: user._id,  // Use user._id as reference to the User model
      content: message,
      vector, // Vector derived from Hugging Face analysis
      sentiment, // Sentiment of the message
      likesCount: 0,  // Initial likes count
      date: new Date(),  // Date when post is created
    });

    // Save the post to the database
    await newPost.save();

    // Respond with the created post
    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error in createPost:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Controller to handle liking a post and updating user vector
export const likePost = asyncHandler(async (req, res) => {
  try {
    const { postId } = req.body;  // Get the postId from the request body
    const userEmail = req.userEmail; // Assuming user is authenticated
    const isLiked = req.body.isLiked; // Boolean indicating if the post is liked or disliked

    if (!postId || !userEmail) {
      return res.status(400).json({ error: "Missing postId or userEmail" });
    }

    // Fetch the post and user from the database
    const post = await Post.findById(postId);
    const user = await User.findOne({ email: userEmail });

    if (!post || !user) {
      return res.status(404).json({ error: "Post or User not found" });
    }

    // Fetch the current vector of the user
    let userVector = user.vector;
    
    // Extract the class of the post (for example, it's stored in post.vector)
    const postVector = post.vector;

    // Example update logic: Update the user’s vector based on like or dislike
    const updatedUserVector = userVector.map((value, index) => {
      return value + (isLiked ? 1 : -1) * postVector[index] * 2;  // Add or subtract based on like/dislike
    });

    // Update the user's vector in the database
    user.vector = updatedUserVector;
    await user.save();

    // Increment or decrement the post's like count based on the action
    if (isLiked) {
      post.likesCount += 1;
    } else {
      post.likesCount -= 1;
    }
    await post.save();

    res.status(200).json({
      message: isLiked ? "Post liked successfully and user vector updated" : "Post disliked and user vector updated"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to like or dislike post and update vector" });
  }
});

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userEmail = req.userEmail; // Assuming authenticateUser middleware sets this

    if (!postId) {
      return res.status(400).json({ error: "Post ID is required." });
    }

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Check if the post exists and belongs to the user
    const post = await Post.findOne({ _id: postId, user: user._id });
    if (!post) {
      return res.status(403).json({ error: "You do not have permission to delete this post." });
    }

    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete the post." });
  }
};


export const getPostsGroupedByCountry = async (req, res) => {
  try {
    const country = req.query.country;
    const climateClasses = process.env.CLIMATE_CLASSES.split(',');

    const result = await Post.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'userDetails',
        },
      },
      {
        $unwind: '$userDetails',
      },
      {
        $match: { 'userDetails.country': country },
      },
      {
        $group: {
          _id: '$userDetails.country',
          posts: { $push: '$$ROOT' },
          positiveSentimentCount: {
            $sum: {
              $cond: [{ $eq: ['$sentiment', 'positive'] }, 1, 0],
            },
          },
          negativeSentimentCount: {
            $sum: {
              $cond: [{ $eq: ['$sentiment', 'negative'] }, 1, 0],
            },
          },
          neutralSentimentCount: {
            $sum: {
              $cond: [{ $eq: ['$sentiment', 'neutral'] }, 1, 0],
            },
          },
        },
      },
      {
        $project: {
          country: '$_id',
          posts: 1,
          sentimentScores: {
            positive: '$positiveSentimentCount',
            negative: '$negativeSentimentCount',
            neutral: '$neutralSentimentCount',
          },
          overallSentiment: {
            $cond: [
              { $gt: ['$positiveSentimentCount', '$negativeSentimentCount'] },
              'positive',
              {
                $cond: [
                  { $gt: ['$negativeSentimentCount', '$positiveSentimentCount'] },
                  'negative',
                  'neutral',
                ],
              },
            ],
          },
          // Adding trending topics based on the highest valued vector indices
          trendingTopics: {
            $map: {
              input: { $range: [0, 10] },
              as: 'index',
              in: {
                topic: { $arrayElemAt: [climateClasses, '$$index'] },
                value: {
                  $cond: {
                    if: { $gt: [{ $arrayElemAt: ['$vector', '$$index'] }, null] },
                    then: { $arrayElemAt: ['$vector', '$$index'] },
                    else: 0, // Default to 0 if the value is null
                  },
                },
              },
            },
          },
        },
      },
      {
        $addFields: {
          trendingTopics: {
            $slice: [
              { $sortArray: { input: '$trendingTopics', sortBy: { value: -1 } } },
              3, // Number of top topics to return
            ],
          },
        },
      },
    ]);

    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.error('Error grouping posts by country:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
