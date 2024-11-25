import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/userRoute.js"
import connectDB from "./config/db.js";
//import authenticateUser from "./middlewares/authenticateUser.js";
import asyncHandler from "./middlewares/asyncHandler.js";
import Post from "./models/postModel.js"; // Assuming you have a `Post` model
import postRoutes from "./routes/postRoute.js"

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
app.use("/api/v1/posts", postRoutes); // Use the posts routes

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
