import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import axios from 'axios'; // Add this import
import userRoute from "./routes/userRoute.js"
import connectDB from "./config/db.js";
//import authenticateUser from "./middlewares/authenticateUser.js";
import asyncHandler from "./middlewares/asyncHandler.js";
import Post from "./models/postModel.js"; // Assuming you have a `Post` model
import postRoutes from "./routes/postRoute.js"
import campaignRoute from "./routes/campaignRoute.js"
// env variables configuration
dotenv.config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// App Configuration
const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:8080",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/campaigns", campaignRoute); // Use the posts routes

// News API integration
const NEWS_API_KEY = process.env.NEWS_API_KEY; // Store your News API key in an environment variable
const NEWS_API_URL = `https://newsapi.org/v2/everything`;

// Fetch news based on a query
app.get("/api/v1/news", async (req, res) => {
  try {
    const { query } = req.query; // Expecting query param like "climate change" or "eco-tourism"

    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    // Make a request to the News API
    const response = await axios.get(NEWS_API_URL, {
      params: {
        q: query, // Search query
        apiKey: NEWS_API_KEY,  // News API Key
        pageSize: 100,  // You can adjust the number of results returned
      },
    });

    const newsData = response.data.articles;
    const randomizedNews = newsData.sort(() => Math.random() - 0.5);

    // Send the news data as a response
    return res.status(200).json({ articles: randomizedNews });
  } catch (error) {
    console.error("Error fetching news:", error.message);
    return res.status(500).json({ message: "Failed to fetch news" });
  }
});



// Connect to the database
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}!`);
    });
  } catch (error) {
    console.error(`Error starting the server: ${error.message}`);
    process.exit(1);
  }
};




startServer();
