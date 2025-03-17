const express = require("express");
const app = express();
const Listing = require("./init");
const path = require("path");
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Enables form data parsing

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/"));

// Serve static files (optional, for CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public/")));

app.get("/listings", async (req, res) => {
  let { searchKeyword } = req.query;
  console.log(searchKeyword);
  if (searchKeyword) {
    let result = await Listing.find(
        { $text: { $search: searchKeyword} },
        { score: { $meta: "textScore" } } // Get relevance score
      ).sort({ score: { $meta: "textScore" } }); // Sort by score
    
      console.log(result);
  }
 
  res.render("index.ejs");
});

app.get("/listings/category", async (req, res) => {
  let { type } = req.query;
  let result = await Listing.find({ category: type });
  console.log(result);
  res.redirect("/listings");
});

app.listen(8080, () => {
  console.log("Server is running at port @ 8080");
});
