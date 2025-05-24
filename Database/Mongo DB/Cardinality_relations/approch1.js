// Import the Mongoose connection setup (configured in DBsetup.js)
const mongoose = require("./DBsetup.js");

// Define the User schema to represent a one-to-few relationship
// Each user has a 'username' and an array of 'addresses'
// Addresses are embedded subdocuments containing location and city fields
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  addresses: [
    {
      location: String,
      city: String,
    },
  ],
});

// Create a Mongoose model from the schema, enabling CRUD operations on User documents
const User = mongoose.model("User", userSchema);

/*
  Function: addUsers
  - Purpose: Demonstrates creating a new user with multiple addresses
  - Data Flow:
      1. A new User instance is created with an initial address.
      2. A second address is added to the 'addresses' array using the push method.
      3. The user document is saved to the MongoDB database.
  - Main Concept:
      This is an example of a one-to-few embedded relationship where one user document
      directly contains multiple address subdocuments. This structure is useful when the
      related data (addresses) is not large and is tightly coupled with the parent document.
*/
async function addUsers() {
  let user1 = new User({
    username: "Chima Sakuragava",
    addresses: [
      {
        location: "B-P12 Baker Street ",
        city: "Downtown",
      },
    ],
  });
  
  // Add another address to the same user, demonstrating the one-to-few relationship
  user1.addresses.push({ location: "P12 Majiya Wendeder", city: "kyoto" });
  
  // Save the user document with embedded addresses to the database
  let result = await user1.save();
  console.log(result);
};

// Execute the addUsers function to add a new user with multiple addresses to the DB
addUsers();
