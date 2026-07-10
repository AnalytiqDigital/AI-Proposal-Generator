const express = require("express");
const cors = require("cors");
require("dotenv").config();
const User = require("./models/User");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize DB connection
const connectDB = require('./config/db');
connectDB();

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to AnalytIQ ProposalAI API 🚀"
    });
});




app.get("/test-user", async (req, res) => {
  const count = await User.countDocuments();
  res.json({
    message: "User model is working!",
    totalUsers: count,
  });
});

module.exports = app;