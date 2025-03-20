const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviewSchema"); // Import Review model to establish references.
const ExpressError = require("../utils/ExpressError"); // Custom error class for error handling.

// ==================== Listing Schema ====================
// This schema defines a listing (property) in the Airbnb clone.
// It includes fields for title, description, image details, price, and location.
// It also establishes relationships with reviews and the owner (a User).
const listingSchema = new Schema({
  title: {
    type: String,
    required: true, // Title is required.
  },
  description: {
    type: String,
    required: true, // Description is required.
  },
  image: {
    url: String,      // URL to the listing image.
    filename: String, // Filename for image storage reference.
  },
  price: {
    type: Number,
    required: true, // Price is required.
  },
  location: {
    type: String,
    required: true, // Location string (e.g., address or neighborhood).
  },
  // Reviews: An array of ObjectIds referencing Review documents.
  reviews: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Review" 
  }],
  // Owner: A reference to the User who owns the listing.
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // Geometry: Used for geospatial data to integrate with Leaflet for maps.
  geometry: {
    type: {
      type: String,
      enum: ["Point"], // Only 'Point' is valid, following GeoJSON format.
      required: true,
      default: "Point",
    },
    coordinates: {
      type: [Number], // Expected format: [longitude, latitude]
      required: true,
    },
  },
  // Category: Defines the type of listing with predefined values.
  category: {
    type: String,
    required: true,
    enum: [
      "Icons",
      "Beachfront",
      "Lakefront",
      "Mansions",
      "Amazing Pools",
      "Farms",
      "Castles",
      "Rooms",
      "Treehouse",
      "Luxury",
      "Cabins",
      "Tiny homes",
      "Islands",
      "Countrysides",
      "Historical Homes",
      "Design",
      "Artic",
      "Top Cities",
      "Camping",
      "Boats",
    ],
  },
});

// ------------------- Middleware for Cascade Delete -------------------
// When a listing is deleted, this post middleware ensures that all associated reviews are also deleted.
// This maintains referential integrity and prevents orphaned documents.
listingSchema.post("findOneAndDelete", async function (deletedListing) {
  if (
    deletedListing &&
    deletedListing.reviews &&
    deletedListing.reviews.length > 0
  ) {
    try {
      // Delete all reviews whose _id exists in the deleted listing's reviews array.
      let result = await Review.deleteMany({
        _id: { $in: deletedListing.reviews },
      });
    } catch (error) {
      // Wrap any errors in an ExpressError to standardize error handling.
      throw new ExpressError(400, error);
    }
  }
});

// Create the Listing model from the schema.
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
