// ==================== Listing Controller ====================

// Import required models, utilities, and error classes.
const Listing = require("../model/listingSchema.js");
const ExpressError = require("../utils/ExpressError.js");
// MongoDB's ObjectId and Mongoose for aggregation operations.
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

/*
  Controller: index
  -------------------------------
  Purpose:
    - Retrieves listings based on query parameters.
    - Supports filtering by category (type) and search queries.
    - Implements dual search strategy: text search for non-numeric input and price range search for numeric input.
    - Enhances each listing with an average rating calculated using MongoDB aggregation.
  
  Key Points & Lessons:
    1. **ForEach Issue in Async Pipelines:**
       - Using forEach with async/await does not wait for asynchronous operations.
       - Instead, map() combined with Promise.allSettled is used to handle asynchronous aggregation on each listing.
    2. **Populate Method Use:**
       - After querying, listings are populated with the 'owner' field to replace the owner ID with actual user data.
    3. **Search Strategy:**
       - If `type` is provided, filter by category.
       - If `search` is provided and non-numeric, perform a text search with relevance scores.
       - If `search` is numeric, treat it as a price query and search within a ±1000 price range.
*/
module.exports.index = async (req, res, next) => {
  let { type, search } = req.query;
  let listings = [];

  // Filter listings by category.
  if (type) {
    listings = await Listing.find({ category: type }).populate("owner");
  }
  // If a search query exists.
  else if (search) {
    if (isNaN(search)) {
      // Use MongoDB text search for non-numeric queries.
      listings = await Listing.find(
        {
          $text: {
            $search: search,
          },
        },
        {
          score: { $meta: "textScore" },
        }
      )
        .sort({
          score: { $meta: "textScore" },
        })
        .populate("owner");
    } else {
      // If search is numeric, treat it as a price filter.
      let Price = Number(search);
      let greaterPrice = Price + 1000;
      let lessPrice = Price - 1000;
      listings = await Listing.find({
        price: { $gte: lessPrice, $lte: greaterPrice },
      })
        .sort({ price: -1 })
        .populate("owner");
    }
  } else {
    // Default: retrieve all listings.
    listings = await Listing.find().populate("owner");
  }

  // ------------------- Aggregation for Average Rating -------------------
  // Note: forEach doesn't work well with await in async pipelines.
  // Instead of using forEach (which would not wait for all aggregation operations),
  // we use map() combined with Promise.allSettled to handle async rating calculations.
  listings = await Promise.allSettled(
    listings.map(async (listing) => {
      // MongoDB aggregation pipeline to calculate the average star rating.
      let ratingAvg = await Listing.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(listing._id) } },
        {
          $lookup: {
            from: "reviews",            // Lookup reviews collection.
            localField: "reviews",      // Match listing reviews array.
            foreignField: "_id",        // Against review _id.
            as: "reviewsData",
          },
        },
        { $unwind: { path: "$reviewsData", preserveNullAndEmptyArrays: true } },
        {
          $group: {
            _id: "$_id",
            avgCount: { $avg: "$reviewsData.star" }, // Calculate average star rating.
          },
        },
        {
          $project: {
            _id: 1,
            avgCount: { $round: ["$avgCount", 2] }, // Round the average to 2 decimal places.
          },
        },
      ]);
      // Convert listing document to a plain object to safely add new properties.
      listing = listing.toObject();
      // Attach calculated average rating (default to 0 if no ratings).
      listing.ratingAvg = ratingAvg?.[0]?.avgCount ?? 0;
      return listing;
    })
  );
  // Extract values from Promise.allSettled results.
  listings = listings.map((result) => result.value);

  // Render the index view with the processed listings.
  res.render("./listings/index.ejs", { listings });
};

/*
  Controller: renderNewListingForm
  -------------------------------
  Purpose:
    - Renders the form for creating a new listing.
    - A simple endpoint that serves the new listing form view.
*/
module.exports.renderNewListingForm = (req, res, next) => {
  try {
    res.render("./listings/new.ejs");
  } catch (err) {
    next(err);
  }
};

/*
  Controller: addNewListing
  -------------------------------
  Purpose:
    - Handles the creation of a new listing.
    - Demonstrates multiple server-side validation approaches:
         1. Hard validation (manual checks) – commented out.
         2. Joi-based validation (preferred method) – abstracted in middleware.
    - Accepts file upload data for images.
    - Stores listing details and associates the current user as the owner.
  
  Key Points & Lessons:
    - **Server-side Validation:**
      - Initially considered manual (hard) validation for each field (commented out).
      - Ultimately, Joi is used for cleaner, declarative validation via middleware.
    - **File Upload Handling:**
      - Image file data (path and filename) is extracted from req.file.
    - **Data Flow:**
      - New listing is constructed with details from req.body and file upload.
      - Listing owner is set from req.user, ensuring the listing is associated with the correct user.
    - **Flash Messaging:**
      - A success flash message is set after creation.
*/
module.exports.addNewListing = async (req, res, next) => {
  // Extract listing details and uploaded file info.
  let { title, description, price, location, coordinates, category } = req.body;
  let { path, filename } = req.file;

  // Construct new listing with the provided data.
  let listing = new Listing({
    title: title,
    description: description,
    image: {
      url: path,
      filename: filename,
    },
    category: category,
    price: price,
    location: location,
    owner: req.user._id, // Set current user as owner.
    geometry: {
      coordinates: coordinates,
    },
  });

  // Save the new listing to the database.
  let newlisting = await listing.save();
  // Set flash message for user feedback.
  req.flash("success", "New Listing is Created!");
  // Redirect to the homepage after creation.
  res.redirect("/");
};

/*
  Controller: renderEditListingForm
  -------------------------------
  Purpose:
    - Renders the form for editing an existing listing.
    - Retrieves the listing by id and prepares a preview image.
  
  Key Points:
    - Checks if the listing exists; if not, flashes an error and redirects.
    - Transforms the listing image URL for a preview (smaller size, auto quality).
*/
module.exports.renderEditListingForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "The listing you want is Deleted");
    return res.redirect("/");
  }

  // Transform image URL for preview using Cloudinary transformations.
  let previewImage = listing.image.url;
  previewImage = previewImage.replace(
    "/upload",
    "/upload/w_250,c_fill,q_auto,f_auto"
  );

  res.render("./listings/edit.ejs", { listing, previewImage });
};

/*
  Controller: editListing
  -------------------------------
  Purpose:
    - Processes the update of an existing listing.
    - Demonstrates server-side validation (via Joi middleware).
    - Updates listing details, including geocoding and optional image replacement.
  
  Key Points:
    - Extracts and separates coordinates from other updated data.
    - Uses findByIdAndUpdate with validators to ensure data integrity.
    - Checks if a new image is uploaded and updates the listing accordingly.
*/
module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  // Separate coordinates from other data.
  let { coordinates, ...updatedData } = req.body;
  // Update listing with new data and set updated geometry.
  let updatedListing = await Listing.findByIdAndUpdate(
    id,
    {
      ...updatedData,
      geometry: {
        type: "Point",
        coordinates: req.body.coordinates,
      },
    },
    { runValidators: true, new: true }
  );

  // If a new image is uploaded, update the image field.
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    updatedListing.image = { url, filename };
    await updatedListing.save();
  }
  req.flash("success", "Listing is Updated!");
  res.redirect(`/listings/${id}/details`);
};

/*
  Controller: deleteListing
  -------------------------------
  Purpose:
    - Deletes a listing by id.
    - Uses findOneAndDelete to remove the listing document from the database.
    - Sets a flash message upon successful deletion.
*/
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findOneAndDelete(
    { _id: id },
    { runValidators: true }
  );
  req.flash("success", "Listing is Deleted!");
  res.redirect("/");
};

/*
  Controller: showListing
  -------------------------------
  Purpose:
    - Displays detailed information for a specific listing.
    - Uses populate to replace owner IDs and review references with full documents.
    - Also calculates and attaches average rating and total review count to the listing.
  
  Key Points & Lessons:
    - ** Populate vs. Manual Lookup:**
      - Instead of manually querying reviews, the populate method replaces ObjectIds with actual review documents.
      - Demonstrates nested population: reviews and their authors are populated.
    - **Aggregation for Average Rating:**
      - Uses a MongoDB aggregation pipeline to calculate the average star rating.
      - Enhances the listing object with both total review count and average rating.
    - **Fallback & Error Handling:**
      - If the listing is not found, flashes an error and redirects.
*/
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let detailListing = await Listing.findById(id)
    .populate("owner")
    .populate({
      path: "reviews", // Populate the reviews field.
      populate: {
        path: "author", // Nested populate: fill in the author details for each review.
        select: "_id username email picture", // Select specific fields.
      },
    });
  let totalReviews = detailListing.reviews.length;
  // Attach total review count.
  detailListing.totalReviews = totalReviews;
  
  // Calculate average rating using aggregation pipeline.
  let ratingAvg = await Listing.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(id) } },
    {
      $lookup: {
        from: "reviews",
        localField: "reviews",
        foreignField: "_id",
        as: "reviewsData",
      },
    },
    { $unwind: { path: "$reviewsData", preserveNullAndEmptyArrays: true } },
    {
      $group: {
        _id: "$_id",
        avgCount: { $avg: "$reviewsData.star" },
      },
    },
    {
      $project: {
        _id: 1,
        avgCount: { $round: ["$avgCount", 2] },
      },
    },
  ]);

  ratingAvg = ratingAvg?.[0]?.avgCount ?? 0;
  detailListing.ratingAvg = ratingAvg;

  // If the listing does not exist, notify the user.
  if (!detailListing) {
    req.flash("error", "The listing you want is Deleted");
    return res.redirect("/");
  }
  
  // Render the details view with the enriched listing data.
  res.render("./listings/details.ejs", { detailListing });
};
