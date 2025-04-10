// backend/routes/userRoutes.js
const express = require("express");
const User = require("../models/Users"); // Ensure the correct path here
const router = express.Router();

// Example route for user
router.get("/", async (req, res) => {
    try {
        const users = await User.find();  // Fetch users from MongoDB
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
