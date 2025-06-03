// ==================== Reviews Routes ====================

// Require Express and create a Router instance.
// mergeParams: true allows the router to access params from its parent routes (e.g., listing id).
const express = require("express");
const router = express.Router({ mergeParams: true });

// Utility to catch errors in async functions and forward them to error-handling middleware.
const wrapAsync = require("../utils/wrapAsync.js");

// Import middleware functions for validating reviews and ensuring proper access.
let {
  validateReview,   // Validates review input data.
  isLoggedIn,       // Checks if a user is authenticated.
  isReviewOwner,    // Checks if the current user owns the review.
} = require("../utils/middleware.js");

// Import the review controller to handle review-related business logic.
const reviewController = require("../controllers/review.js");

// -------------------- Review Routes --------------------

// POST /listings/:id/review/new
// Create a new review for a specific listing.
// Middleware chain: isLoggedIn -> validateReview -> wrapAsync(controller.addNewReview)
router.post(
  "/new",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.addNewReview)
);

// DELETE /listings/:id/review/:review_id/delete
// Delete a review.
// Middleware chain: isLoggedIn -> isReviewOwner -> wrapAsync(controller.deleteReview)
router.delete(
  "/:review_id/delete",
  isLoggedIn,
  isReviewOwner,
  wrapAsync(reviewController.deleteReview)
);

// Export the router to be used in server.js.
module.exports = router;
