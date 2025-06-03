// ==================== Listings Routes ====================

// Require Express and create a Router instance.
// mergeParams: true allows access to params from parent routes if needed.
const express = require("express");
const router = express.Router({ mergeParams: true });

// Import listing controller to handle business logic for listings.
const listingController = require("../controllers/listing.js");
// Utility function to wrap async functions to catch errors.
const wrapAsync = require("../utils/wrapAsync.js");

// Import middleware for authentication, authorization, input validation, and geocoding.
const {
  isLoggedIn,      // Ensures the user is authenticated.
  isOwner,         // Checks if the current user owns the listing.
  validateListing, // Validates listing input data.
  geoCoder,        // Middleware to process geospatial data for the listing.
} = require("../utils/middleware.js");

// Multer for handling file uploads (listing images).
const multer = require("multer");
// Cloud storage configuration for listing images.
const { listingsStorage } = require("../cloudConfig.js");
const upload = multer({ storage: listingsStorage });

// -------------------- Listings Routes --------------------

// GET / (homepage)
// Display all listings.
router.get("/", wrapAsync(listingController.index));

// -------------------- New Listing --------------------
// Route: /listings/new
// GET: Render form for creating a new listing (requires user to be logged in).
// POST: Process new listing creation, including image upload, geocoding, and input validation.
router
  .route("/listings/new")
  .get(isLoggedIn, listingController.renderNewListingForm)
  .post(
    isLoggedIn,
    upload.single("image"),
    geoCoder,
    validateListing,
    wrapAsync(listingController.addNewListing)
  );

// -------------------- Edit Listing --------------------
// Route: /listings/:id/edit
// GET: Render the edit form for a listing; only accessible by the owner.
// PATCH: Process edits to a listing, including image upload and geocoding.
router
  .route("/listings/:id/edit")
  .get(isLoggedIn, isOwner, wrapAsync(listingController.renderEditListingForm))
  .patch(
    isLoggedIn,
    isOwner,
    upload.single("image"),
    geoCoder,
    validateListing,
    wrapAsync(listingController.editListing)
  );

// -------------------- Delete Listing --------------------
// DELETE /listings/:id/delete
// Delete a listing; only the owner can perform this action.
router.delete(
  "/listings/:id/delete",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.deleteListing)
);

// -------------------- Show Listing Details --------------------
// GET /listings/:id/details
// Display detailed information about a specific listing.
router.get("/listings/:id/details", wrapAsync(listingController.showListing));

// Export the router.
module.exports = router;
