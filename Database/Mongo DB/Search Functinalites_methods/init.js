const mongoose = require("mongoose");

// ------------------ Listing Schema Definition ------------------
// Define a schema for listings with required fields: title, price, location, and category.
// Note: The 'category' field uses an enum to restrict values to a predefined set.
let listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Amazing view",
      "Icons",
      "Beachfront",
      "Lakefront",
      "Mansion",
      "Amazing Pool",
      "Farms",
      "Castles",
      "Rooms",
      "Treehouse",
      "Luxury",
      "Cabins",
      "Tiny homes",
      "Islands",
      "Countryside",
      "Historical Homes",
      "Design",
      "Earth Homes",
      "Artic",
      "Top Cities",
      "Top of the world",
      "Domes",
      "Tropical",
      "Camping",
      "Boats",
      "National Park",
      "Caves",
    ],
  },
});

// Create the Listing model based on the schema.
let Listing = new mongoose.model("listing", listingSchema);
module.exports = Listing;

// ------------------ Database Connection Setup ------------------
// Connect to a local MongoDB instance and log a successful connection.
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/searchFunctionality");
    console.log("Connection is successfully established with DB");
  } catch (error) {
    console.error(error);
  }
}
mongoose.set("strictQuery", true);
main();

// ------------------ Sample Data for Listings ------------------
// Array of listing objects to seed the database.
// Each object conforms to the listing schema.
const Data = [
  {
    title: "The Ritz-Carlton, Paris",
    price: 750,
    location: "Paris, France",
    category: "Luxury",
  },
  {
    title: "Marina Bay Sands",
    price: 850,
    location: "Singapore",
    category: "Amazing view",
  },
  // ... (more listing objects)
  {
    title: "Yacht Stay in Monaco",
    price: 1500,
    location: "Monaco",
    category: "Boats",
  },
];

// ------------------ Function: initDB ------------------
// Purpose: Clears existing listings and seeds the collection with sample Data.
// Data Flow: Deletes all documents from the Listing collection, then inserts the Data array.
async function initDB() {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(Data).then((res) => console.log(res));
  } catch (error) {
    console.error(error);
  }
}
// Uncomment to seed the database: initDB();

// ------------------ Indexing Functions ------------------

// Function: createPriceIndex
// Purpose: Create a standard ascending index on the 'category' field.
// Note: Although the function name suggests "price", this index is built on 'category'.
// Standard indexes improve the performance of queries that filter or sort by indexed fields.
async function createPriceIndex() {
  await Listing.collection.createIndex({ category: 1 });
  console.log("Index on price created!");
}
// Uncomment to create the index: createPriceIndex();

// Function: showIndexes
// Purpose: Retrieve and log the current indexes on the Listing collection.
// Use this to confirm which indexes exist.
async function showIndexes() {
  const indexes = await Listing.collection.indexes();
  console.log(indexes);
}
// Uncomment to display indexes: showIndexes();

// Function: getDetailedIndexInfo
// Purpose: Retrieve detailed information about indexes on the Listing collection.
// This can include key information about each index, useful for debugging or performance tuning.
async function getDetailedIndexInfo() {
  const indexes = await Listing.collection.indexInformation({ full: true });
  console.log(indexes);
}
// Uncomment to display detailed index info: getDetailedIndexInfo();

// Function: createTextIndex
// Purpose: Create a text index on the 'title', 'category', and 'location' fields.
// Main Concept: 
//   - Text indexes enable powerful text search queries using MongoDB's $text operator.
//   - The text index computes relevance scores that can be used to sort search results.
async function createTextIndex() {
  await Listing.collection.createIndex({
    title: "text",
    category: "text",
    location: "text",
  });
  console.log("Text index created!");
}
// Uncomment to create the text index: createTextIndex();
