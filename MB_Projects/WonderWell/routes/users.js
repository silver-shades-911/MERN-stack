// ==================== Users Routes ====================

// Require Express and Passport for authentication.
const express = require("express");
const passport = require("passport");
const router = express.Router();

// Middleware to save redirect URL to locals (used for post-login redirection).
const { saveRedirectURLtoLocals } = require("../utils/middleware.js");

// Import user controller functions to manage signup, login, and logout actions.
const userController = require("../controllers/users.js");

// Multer for handling file uploads (profile pictures).
const multer = require("multer");
// Cloud storage configuration for user images.
const { usersStorage } = require("../cloudConfig.js");
const upload = multer({ storage: usersStorage });

// -------------------- User Signup --------------------

// Route: /users/signup
// GET: Render signup form.
// POST: Handle signup with file upload for profile picture.
router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(upload.single("profilePicture"), userController.signupNewUser);

// -------------------- User Login --------------------

// Route: /users/login
// GET: Render login form.
// POST: Authenticate user with Passport local strategy.
// Middleware saveRedirectURLtoLocals preserves the URL to redirect after login.
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectURLtoLocals,
    passport.authenticate("local", {
      failureRedirect: "/users/login",
      failureFlash: true,
    }),
    userController.loginUser
  );

// -------------------- User Logout --------------------

// Route: /users/logout
// GET: Log out the user.
router.get("/logout", userController.logoutUser);

// Export the router for mounting in server.js.
module.exports = router;
