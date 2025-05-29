const jwt = require("jsonwebtoken");
const User = require("../models/User");

// secret key for signature verification
const SEC_KEY = "RTX4090MACULTRA";

const fetchuser = async (req, res, next) => {
  try {
    let token = req.header("auth-token"); // login api send token in header name as "auth-token"

    // if token not exists  -> return back them
    if (!token) {
      return res.status(401).json({ error: "Unauthorized Access" });
    }

    // if token exists -> draw payload (user data ) from JWT
    let payload = jwt.verify(token, SEC_KEY);

    // if token is not exists -> then return back
    if (!payload) {
      return res.status(401).json({ error: "Unauthorized Access" });
    }

    //if payload is exists ->
    req.user = payload.user; // creating user obj in req for future operation using userID
    console.log(payload);
    console.log(req.user.id);
    next();
  } catch (err) {
     // Choose status code based on error type
  if (err.name === "TokenExpiredError") {
    return res.status(401).json({ error: "Token expired" });
  } else if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ error: "Invalid token" });
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
  }
};

module.exports = fetchuser;
