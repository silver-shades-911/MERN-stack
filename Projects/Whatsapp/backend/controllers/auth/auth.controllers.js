// packages import
import bcrypt from "bcryptjs";

// modules import
import User from "../../models/user/user.model.js";
import generateJwtAndSetCookie from "../../utils/generateJwtAndSetCookie.js";

//signup
export const signupController = async (req, res) => {
  try {
    console.log("signupController");

    // take data
    const { fullName, username, gender, password, confirmPassword } = req.body;

    // if password donest match
    if (!password === confirmPassword) {
      return res.status(400).json({
        error: "Password don't match",
      });
    }

    // is user exist
    const existedUser = await User.findOne({ username: username });

    if (existedUser) {
      return res.status(400).json({
        error: "Username already exists",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // profile picture
    const profilePictureURL = `https://avatar.iran.liara.run/public/${gender}/username=${username}`;

    // new user
    let newUser = {
      fullName,
      username,
      password: hash,
      profileUrl: profilePictureURL,
      gender,
    };

    if (newUser) {
      //generate JWT and set cookie
      await generateJwtAndSetCookie(newUser._id, res);

      /*
      ? Why passing res in generateJwtAndCookie(..., ...)

      res.cookie("jwt", token, { ... });
      This sets a cookie in the user's browser (or Postman), and you can only do that with the res object from Express.
      
      So when you pass res to your utility function:
      
      await generateJwtAndSetCookie(newUser._id, res);
      You're allowing the function to attach the JWT to a secure cookie in the response.

      */

      // add to DB
      await User.create(newUser);

      res.status(201).json({
        _id: newUser._id,
        ...newUser,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    console.error("Error in signup controller", err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

//signup
export const loginController = (req, res) => {
  console.log("login");
};

//signup
export const logoutController = (req, res) => {
  console.log("logout");
};
