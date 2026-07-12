const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AnalytIQ ProposalAI API Running 🚀",
  });
});

// Routes
app.use("/api/auth", authRoutes);

module.exports = app;