// ==================== Users Controller ====================

// Import the ExpressError class for custom error handling.
const ExpressError = require("../utils/ExpressError.js");
// Import the User model.
const User = require("../model/user.js");

/*
  Controller: renderSignupForm
  --------------------------------
  - Purpose: Renders the signup page.
  - Data Flow: Simply renders the EJS signup view.
*/
module.exports.renderSignupForm = (req, res, next) => {
  try {
    res.render("./users/signup.ejs");
  } catch (error) {
    next(error);
  }
};

/*
  Controller: signupNewUser
  --------------------------------
  - Purpose: Handles new user registration.
  - Data Flow:
    1. Extracts username, email, and password from req.body.
    2. Processes file upload (profile picture) data from req.file.
    3. Transforms the image path to include desired Cloudinary transformations.
    4. Creates a new User instance with provided details.
    5. Registers the user using Passport's register method.
    6. Immediately logs in the new user, storing essential info in the session.
    7. Flashes a welcome message and redirects to the home page.
  - Error Handling: If any error occurs (e.g., validation, duplicate user), flashes an error message and redirects back to signup.
*/
module.exports.signupNewUser = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    let { filename, path } = req.file;
    // Transform the file path to use Cloudinary image transformations.
    let transformedPath = path.replace(
      "/upload/",
      "/upload/ar_1:1,g_auto,w_500,c_auto,r_max/"
    );
    
    // Create a new User instance.
    let newUser = new User({
      email: email,
      username: username,
      picture: {
        url: transformedPath,
        filename: filename,
      },
    });
    
    // Register the user with Passport; this handles hashing the password.
    let registeredUser = await User.register(newUser, password);
    
    // Automatically log in the newly registered user.
    req.logIn(registeredUser, (err) => {
      if (err) {
        return next(err);
      } else {
        // Save user details in the session for later use.
        req.session.user = {
          username: req.user.username,
          url: req.user.picture.url,
          email: req.user.email,
        };
        req.flash("success", "Welcome to Airbnb");
        res.redirect("/");
      }
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/users/signup");
  }
};

/*
  Controller: renderLoginForm
  --------------------------------
  - Purpose: Renders the login page.
  - Data Flow: Simply renders the EJS login view.
*/
module.exports.renderLoginForm = (req, res, next) => {
  try {
    res.render("./users/login.ejs");
  } catch (error) {
    next(error);
  }
};

/*
  Controller: loginUser
  --------------------------------
  - Purpose: Handles user login.
  - Data Flow:
    1. After authentication (handled by Passport in the route), user details are stored in the session.
    2. A success flash message is set.
    3. The user is redirected to the previously saved URL or the home page.
*/
module.exports.loginUser = async (req, res) => {
  req.session.user = {
    username: req.user.username,
    url: req.user.picture.url,
    email: req.user.email,
  };
  req.flash("success", "Welcome back to Airbnb!");
  let redirectURL = res.locals.redirectURL || "/";
  res.redirect(redirectURL);
};

/*
  Controller: userProfile
  --------------------------------
  - Purpose: Returns the current user's profile data in JSON format.
  - Data Flow:
    1. Checks if the session contains user data.
    2. If not, returns a default non-user object.
    3. Otherwise, returns the user data stored in the session.
*/
module.exports.userProfile = async (req, res) => {
  if (!req.session.user) {
    let user = {
      username: "Not-user",
      url: "https://res.cloudinary.com/dzlxpg7ru/image/upload/v1740991015/non-user_zev7dq.png",
      email: "No-email",
    };
    return res.json(user);
  }
  res.json(req.session.user);
};

/*
  Controller: logoutUser
  --------------------------------
  - Purpose: Logs the user out.
  - Data Flow:
    1. Calls req.logout to terminate Passport session.
    2. Destroys the session data.
    3. Clears the session cookie.
    4. Redirects the user to the home page.
  - Error Handling: If errors occur during logout or session destruction, they are handled accordingly.
*/
module.exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(new ExpressError(400, "For Logout you must be first login"));
    }
    // Destroy the session.
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Failed to destroy session" });
      }
      res.clearCookie("connect.sid");
      res.redirect("/");
    });
  });
};
