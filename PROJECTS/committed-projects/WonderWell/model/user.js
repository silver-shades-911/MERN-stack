const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// ==================== User Schema ====================
// This schema stores user-specific information for the Airbnb clone.
// It includes essential fields such as email and a profile picture.
let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // Email is mandatory.
  },
  picture: {
    url: String,      // URL of the user's profile picture.
    filename: String, // Filename stored on the server/cloud.
  },
});

// Integrate Passport-Local Mongoose to handle user authentication.
// This plugin automatically adds username, hash, and salt fields,
// and provides convenient methods for registering and authenticating users.
userSchema.plugin(passportLocalMongoose);

// Create the User model from the schema.
let User = mongoose.model("User", userSchema);

// Export the User model for use in authentication and other user-related operations.
module.exports = User;
