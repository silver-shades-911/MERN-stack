// ==================== Review Controller ====================

// Import required models: Listing and Review.
const Listing = require("../model/listingSchema.js");
const Review = require("../model/reviewSchema.js");

/*
  Controller: addNewReview
  --------------------------------
  - Purpose: Adds a new review to a listing.
  - Data Flow:
    1. Extracts the listing id from URL parameters.
    2. Retrieves review details (content and star rating) from req.body.
    3. Creates a new Review instance, setting the author from res.locals.currUser (current user).
    4. Saves the review to the database.
    5. Finds the listing by id, pushes the new review's ObjectId into the listing's reviews array.
    6. Saves the updated listing.
    7. Sets a success flash message and redirects to the listing details page.
*/
module.exports.addNewReview = async (req, res) => {
  let { id } = req.params; // Listing ID from URL.
  let { content, star } = req.body; // Review data from form submission.
  
  // Create new review with rating, content, and current user as the author.
  let review = new Review({
    star: star,
    content: content,
    author: res.locals.currUser._id,
  });

  // Save review and update corresponding listing.
  let newReview = await review.save();
  let listing = await Listing.findById(id);
  listing.reviews.push(newReview);
  await listing.save();
  
  req.flash("success", "New Review is Created!");
  res.redirect(`/listings/${id}/details`);
};

/*
  Controller: deleteReview
  --------------------------------
  - Purpose: Deletes a review from a listing.
  - Data Flow:
    1. Extracts listing id and review_id from URL parameters.
    2. Updates the Listing document by pulling (removing) the review_id from its reviews array.
    3. Deletes the review document from the Review collection.
    4. Sets a success flash message and redirects to the listing details page.
*/
module.exports.deleteReview = async (req, res) => {
  let { id, review_id } = req.params;
  
  // Remove the review reference from the listing.
  await Listing.findByIdAndUpdate(
    id,
    { $pull: { reviews: review_id } },
    { new: true, runValidators: true }
  );
  
  // Delete the review document.
  await Review.findOneAndDelete({ _id: review_id });
  req.flash("success", "Review is Deleted!");
  res.redirect(`/listings/${id}/details`);
};
