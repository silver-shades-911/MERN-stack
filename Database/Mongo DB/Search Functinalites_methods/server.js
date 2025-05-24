const express = require("express");
const app = express();
const Listing = require("./init"); // Mongoose model for listings
const path = require("path");

// ---------- Middlewares for Request Parsing and Static Files ----------

// Parse JSON payloads and URL-encoded data (e.g., from forms)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the view engine and define the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/"));

// Serve static files such as CSS or images from the public directory
app.use(express.static(path.join(__dirname, "public/")));

// ---------- Route: GET /listings ----------
// Purpose: Display listings and support text-based search functionality.
// Data Flow:
// 1. Extract the search keyword from the query string.
// 2. If a keyword is provided, perform a text search on the Listing collection.
//    - Use MongoDB's text search to compute a relevance score.
//    - Sort the results based on the relevance score.
// 3. Render the index.ejs view (which would display the listings).
app.get("/listings", async (req, res) => {
  let { searchKeyword } = req.query;
  console.log(searchKeyword);
  
  if (searchKeyword) {
    // Perform a text search on the listings using the provided keyword
    let result = await Listing.find(
      { $text: { $search: searchKeyword } },
      { score: { $meta: "textScore" } } // Retrieve the text search relevance score
    ).sort({ score: { $meta: "textScore" } }); // Sort results by the relevance score

    console.log(result);
  }

  // Render the index view (e.g., the listings page)
  res.render("index.ejs");
});

// ---------- Route: GET /listings/category ----------
// Purpose: Filter listings by category.
// Data Flow:
// 1. Extract the category type from the query parameters.
// 2. Query the Listing collection to find all listings matching the specified category.
// 3. Redirect back to the /listings route (which will render the listings page).
app.get("/listings/category", async (req, res) => {
  let { type } = req.query;
  let result = await Listing.find({ category: type });
  console.log(result);
  res.redirect("/listings");
});

// Start the server on port 8080
app.listen(8080, () => {
  console.log("Server is running at port @ 8080");
});
