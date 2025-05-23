const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoDB = require("./db");

// Load environment variables
dotenv.config();

// Validate required environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
    throw new Error('Missing required environment variables: EMAIL_USER, EMAIL_PASS, or ADMIN_EMAIL');
}

// Initialize Express app
const app = express();
const port = 4000;

// Connect to MongoDB
mongoDB();

// CORS Configuration (Allow frontend at `http://localhost:3000` and production domain)
const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(",") || ["http://localhost:3000"],
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Import user-related routes
app.use('/api', require("./routes/CreateUser"));
app.use('/api', require("./routes/LoginUser"));
app.use('/api', require("./routes/Slotbook"));


// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        error: err.message || "Internal server error!",
    });
});

// Start Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});