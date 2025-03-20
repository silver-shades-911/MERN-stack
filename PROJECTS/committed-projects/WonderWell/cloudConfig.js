// ==================== Cloudinary & Multer Configuration ====================

// Import the Cloudinary SDK and the CloudinaryStorage for Multer.
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// ------------------- Cloudinary Setup -------------------
// Configure Cloudinary with credentials stored in environment variables for security.
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,       // Your Cloudinary cloud name.
  api_key: process.env.CLOUD_API_KEY,         // Your Cloudinary API key.
  api_secret: process.env.CLOUD_API_SECRET,   // Your Cloudinary API secret.
});

// ------------------- Storage Configuration for Listings -------------------
// Define a Cloudinary storage engine for listing images.
// Files will be stored in the "Airbnb_Listings" folder and limited to image formats.
const listingsStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Airbnb_Listings",
    allowedFormat: ["png", "jpg", "jpeg"],
  },
});

// ------------------- Storage Configuration for Users -------------------
// Define a Cloudinary storage engine for user profile images.
// Files will be stored in the "Airbnb_users" folder and limited to image formats.
const usersStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Airbnb_users",
    allowedFormat: ["png", "jpg", "jpeg"],
  },
});

// Export Cloudinary instance and storage configurations for use in routes and controllers.
module.exports = {
  cloudinary,
  listingsStorage,
  usersStorage,
};
