// ==================== Joi Validation Schemas ====================

// Import Joi for schema-based input validation.
const Joi = require("joi");

// ------------------- Listing Validation Schema -------------------
// Defines the required structure and constraints for listing data.
// Ensures all listings have a title, description, category, price, location, and valid coordinates.
module.exports.listingSchemaJoi = Joi.object({
  title: Joi.string().required(),               // Title: must be a string and is required.
  description: Joi.string().required(),         // Description: required text.
  category: Joi.string().required(),            // Category: required string (should match one of the enum values in your Listing schema).
  price: Joi.number().min(0).required(),          // Price: non-negative number.
  location: Joi.string().required(),            // Location: required string.
  coordinates: Joi.array()                       // Coordinates: array with exactly 2 numbers [longitude, latitude].
    .items(Joi.number().min(-180).max(180))
    .length(2)
    .required(),
});

// ------------------- Review Validation Schema -------------------
// Defines the required structure and constraints for review data.
// Ensures reviews include a valid star rating and textual content.
module.exports.reviewSchemaJoi = Joi.object({
  star: Joi.number().integer().min(0).max(5).required(), // Star: integer from 0 to 5.
  content: Joi.string().required(),                      // Content: required text for the review.
});
