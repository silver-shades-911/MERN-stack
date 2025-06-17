// ==================== Custom Middleware Utilities ====================

// Import Joi validation schemas for listings and reviews.
const { listingSchemaJoi, reviewSchemaJoi } = require("../joi_Schema.js");
// Import Listing model to check ownership.
const Listing = require("../model/listingSchema.js");
// Import ExpressError for custom error handling.
const ExpressError = require("../utils/ExpressError.js");
// Import Review model for review ownership checks.
const Review = require("../model/reviewSchema.js");

// -------------------- Authentication Middleware --------------------

// Checks if the user is authenticated.
// If not, flashes an error message and redirects to the login page.
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You Must be Logged In First!");
    return res.redirect("/users/login");
  }
  next();
};

// -------------------- Authorization Middleware --------------------

// isOwner: Ensures that the currently logged-in user is the owner of the listing.
// Prevents non-owners from updating or deleting listings.
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(req.user._id)) {
    req.flash(
      "error",
      "You are not the Owner of this Listing, so you don't have permissions to change it."
    );
    // Redirect back to the referring page, or fallback to home.
    let redirectURL = req.get("referer") || "/";
    return res.redirect(redirectURL);
  }
  next();
};

// Middleware to store redirect URL in locals (useful for post-login redirection).
module.exports.saveRedirectURLtoLocals = (req, res, next) => {
  if (req.session.redirectURL) {
    res.locals.redirectURL = req.session.redirectURL;
  }
  next();
};

// -------------------- Joi Validation Middleware --------------------

// Validates incoming listing data against the Joi schema.
// If validation fails, passes a new ExpressError to the error handler.
module.exports.validateListing = (req, res, next) => {
  let result = listingSchemaJoi.validate(req.body);
  let { error } = result;
  if (error) {
    return next(new ExpressError(400, error));
  } else {
    next();
  }
};

// Validates incoming review data against the Joi schema.
// Ensures reviews have valid star ratings and content.
module.exports.validateReview = (req, res, next) => {
  let result = reviewSchemaJoi.validate(req.body);
  let { error } = result;
  if (error) {
    return next(new ExpressError(400, error));
  } else {
    next();
  }
};

// -------------------- Review Authorization Middleware --------------------

// isReviewOwner: Ensures that the current user is the author of the review.
// Prevents users from deleting or updating reviews they did not create.
module.exports.isReviewOwner = async (req, res, next) => {
  let { review_id } = req.params;
  let review = await Review.findById(review_id);
  if (!review.author._id.equals(req.user._id)) {
    req.flash("error", "You are not the Author of this Review");
    let redirectURL = req.get("referer") || "/";
    return res.redirect(redirectURL);
  }
  next();
};

// -------------------- Geocoding Middleware --------------------

// geoCoder: Uses OpenStreetMap's Nominatim API to convert a location string into geospatial coordinates.
// If successful, attaches the [latitude, longitude] array to req.body.coordinates.
// If no location is found, passes an error to the error handler.
module.exports.geoCoder = async (req, res, next) => {
  let response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${req.body.location}`
  );
  let data = await response.json();
  if (data.length > 0) {
    let lon = parseFloat(data[0].lon);
    let lat = parseFloat(data[0].lat);
    req.body.coordinates = [lat, lon];
  } else {
    return next(new ExpressError(400, "Location not found"));
  }
  next();
};
