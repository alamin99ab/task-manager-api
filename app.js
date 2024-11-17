// Importing dependencies
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose"; // Fixed import
import { DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUMBER, REQUEST_TIME } from "./app/config/config.js";
import router from "./routes/api.js";

// Initialize app
const app = express();

// Apply middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: true })); // Fixed the `extended` option
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: REQUEST_TIME, // Example: 15 minutes = 15 * 60 * 1000
  max: REQUEST_NUMBER, // Limit each IP to REQUEST_NUMBER requests per windowMs
});
app.use(limiter);

// Database connection

mongoose
  .connect(DATABASE, { autoIndex: true }) // No need for deprecated options
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

// Define routes
app.use("/api", router);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
