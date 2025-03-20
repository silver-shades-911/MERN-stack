// Load environment variables from .env file when not in production.
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// ========================== Package & Module Setup ==========================

// Require essential packages.
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
var methodOverride = require("method-override");

// Override HTTP methods (e.g., support PUT and DELETE from forms using ?_method=DELETE).
app.use(methodOverride("_method"));

// Use ejs-mate to enable layout features in EJS templates.
const engine = require("ejs-mate");

// Custom error class for standardized error responses.
const ExpressError = require("./utils/ExpressError.js");

// Flash messaging for passing temporary messages (e.g., after redirects).
const flash = require("connect-flash");

// Passport for authentication.
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./model/user.js");

// Import controller for user profile display.
const { userProfile } = require("./controllers/users.js");

// Database URL (using Atlas DB URL from environment variables).
// const DB_url = process.env.ATLASDB_URL;
const DB_url = "mongodb://localhost:27017/wonderWell";

// ========================== Session & Mongo Store ==========================

// Express-session setup with MongoDB store to persist session data.
const session = require("express-session");
const MongoStore = require("connect-mongo");

// Create a session store backed by MongoDB.
const store = MongoStore.create({
  mongoUrl: DB_url,
  crypto: {
    secret: process.env.SECRET_KEY,
  },
  touchAfter: 24 * 3600, // Update session only once per day.
});

// Log any session store errors.
store.on("error", (err) => {
  console.log("ERROR in MONGO SESSION STORE", err);
});

// Configure the session middleware with our store.
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      // Set cookie to expire in 7 days.
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true, // Security: prevents client-side JS access.
    },
  })
);

// Use flash middleware for flash messaging.
app.use(flash());

// ========================== Passport Configuration ==========================

// Initialize Passport and configure session support.
app.use(passport.initialize());
app.use(passport.session());

// Use the local strategy for authentication using the User model.
passport.use(new LocalStrategy(User.authenticate()));
// Serialize and deserialize users for session management.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ---------------------- Flash & Current User Middleware ----------------------
// Set local variables accessible in all EJS templates.
app.use((req, res, next) => {
  res.locals.success = req.flash("success"); // Success messages.
  res.locals.error = req.flash("error");       // Error messages.
  res.locals.currUser = req.user;              // Currently authenticated user.
  next();
});

// ========================== Route Setup ==========================

// Import modular routers for listings, reviews, and users.
const listingsMiniApp = require("./routes/listings.js");
const reviewsMiniApp = require("./routes/reviews.js");
const usersMiniApp = require("./routes/users.js");

// Use ejs-mate for all EJS templates to support layouts.
app.engine("ejs", engine);

// Middleware for parsing incoming request bodies.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine and define the directory for view templates.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/"));

// Serve static files from designated directories (CSS, JS, assets).
app.use(express.static(path.join(__dirname, "public/css/")));
app.use(express.static(path.join(__dirname, "public/js/")));
app.use(express.static(path.join(__dirname, "public/assets/")));

// ========================== Database Connection ==========================

// Connect to MongoDB using the provided Atlas URL.
async function main() {
  try {
    await mongoose.connect(DB_url);
    console.log("Connection is successfully established with DB");
  } catch (error) {
    console.error(error);
  }
}
mongoose.set("strictQuery", true);
main();

// ========================== Route Mounting ==========================

// Mount the listings router at the root path (handles home page and listing details).
app.use("/", listingsMiniApp);

// Mount the reviews router as a nested route under listings.
// This organizes review operations under a specific listing (e.g., /listings/:id/review).
app.use("/listings/:id/review", reviewsMiniApp);

// Mount the users router for user-specific routes (e.g., registration, login, profile).
app.use("/users", usersMiniApp);

// Route for user profile using controller from controllers/users.js.
app.get("/profile", userProfile);

// ========================== 404 & Error Handling ==========================

// Catch-all route: if no routes match, create a custom 404 error.
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// Global error-handling middleware.
// It extracts the status code and message from the error and renders an error page.
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something Went Wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
  console.log(`status code : ${statusCode}, Message : ${message}`);
});

// ========================== Server Startup ==========================

// Start the server on port 8080.
app.listen(8080, () => {
  console.log("server is running at port 8080");
});
