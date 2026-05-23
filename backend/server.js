/**
 * @file server.js
 * @description Entry point for the Expense Tracker backend server
 */

// Load environment variables from .env file into process.env
require("dotenv").config();

// Import the Express framework
const express = require("express");

// Import cors - allows other origins (like Flutter app) to call this server
const cors = require("cors");

// Create the Express application
const app = express();

// Read the port from .env file, or use 3000 as fallback
const PORT = process.env.PORT || 3000;

// ─── Middlewares ───────────────────────────────────────────────
// Tell Express to accept JSON in request bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());
const db = require("./src/config/db");
db.query("SELECT 1")
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err.message));
// ─── Health Check Route ────────────────────────────────────────
/**
 * @route   GET /
 * @desc    Health check - confirms server is running
 * @access  Public
 */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Expense Tracker API is running!",
  });
});

// ─── Start Server ──────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
