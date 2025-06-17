const { required } = require("joi");
const mongoose = require("mongoose");

// ==================== Review Schema ====================
// This schema defines a review that a user can leave on a listing.
// Reviews store a star rating, optional content, a timestamp, and a reference to the author (a User).
const reviewSchema = new mongoose.Schema({
  star: {
    type: Number,
    min: 0,
    max: 5, // Rating must be between 0 and 5.
  },
  content: String, // Optional text feedback.
  created_at: {
    type: Date,
    default: Date.now(), // Automatically sets the creation date.
  },
  // Author is a reference to a User document (establishes a relationship).
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
});

// Create the Review model from the schema.
const Review = mongoose.model("Review", reviewSchema);

// Export the Review model so it can be used by other parts of the application.
module.exports = Review;
