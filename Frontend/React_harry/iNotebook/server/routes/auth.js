const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

// secret key for signature verification
const SEC_KEY = "RTX4090MACULTRA";

// ROUTE 1 => Create a User using : POST "/api/auth/". Does not require auth
router.post(
  "/createuser",
  [
    // array of validationd - check input credentials , if they are worng no need to bother our api just hadle it here
    body("username", "Please insert a valid Username")
      .notEmpty()
      .isLength({ min: 3 }),
    body("email", "Please Insert a valid Email").isEmail(),
    body("password", "Please insert a valid and strong Password").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //flag to check operation is success or failed
    let success = false;

    // validation result getting
    const errors = validationResult(req);
    console.log(errors);

    // if catch error return
    if (!errors.isEmpty()) {
      success=false;
      // check dont have error object
      return res.status(400).json({ success, errors: errors.array() }); // we are sending error catch in while validation , errors obj contain errors array
    }

    try {
      // check if user already exits or not
      let existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            errMsg: "This is email is already exits , Please try with different email",
      });
      };

      // hashing + salting
      const salt = await bcrypt.genSaltSync(10);
      const hash = await bcrypt.hashSync(req.body.password, salt);
      // Store hash in your password DB

      // new user creating
      let user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });

      // creating credential obj from return user object from mongo to pass in JTW as payload
      // donot use direct data from req.body , bcz data should be pass mongoose validation

      let payload = {
        user: {
          //  username: user.username,
          //  email: user.email,  ---> best way to add our data as payload , our id is best data it is unique and fast to authenication in future
          id: user.id,
        },
      };

      // token generation
      let token = await jwt.sign(payload, SEC_KEY);

      success = true;
      res.json({ success, authtoken: token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// ROUTE 2 => Login User : POST "/api/auth/login". Dont require Login
router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: "3" }).exists()],
  async (req, res) => {
    let success = false;
    let errors = validationResult(req);

    // if got errors return them back . no need to bother our server
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, err: errors.message });
    }

    try {
      // check if user exist or not
      let existedUser = await User.findOne({ email: req.body.email });

      // if user not exist then retrun it back
      if (!existedUser) {
        success = false;
        return res.status(400).json({ success, err: "Please Enter valid credentials " }); // dont tell user doesn't exist, why should we tell he is doesnt know right credentials. may be hacker ({common sense })
      }

      // check user password match or not
      let userMatch = await bcrypt.compare(
        req.body.password,
        existedUser.password
      ); // it return boolean value
      console.log(userMatch);

      // if not matched => false
      if (!userMatch) {
        success = false;
        return res.status(400).json({ success, err: "Please Enter Valid credentials" });
      }

      // if matched => true

      let payload = {
        user: {
          id: existedUser.id,
        },
      };

      let token = await jwt.sign(payload, SEC_KEY);
       
      success = true;
      res.json({ success, authtoken: token });
    } catch (err) {
      res.status(500).json({ errorMsg: err.message });
    }
  }
);

// ROUTE 3 => Get loggedin use data: POST "/api/auth/fetchuser". Required login.

router.post("/fetchuser", fetchuser, async (req, res) => {
  //fetchuser middleware to find id from JWT
  try {
    // get ID
    let userID = req.user.id;

    // finding user data from DB
    let user = await User.findById(userID).select("-password"); // amazing method of mongoose for which field in Document select or not  -> Query.prototype.select()
    // exculding password
    //
    if (!user) {
      return res.status(400).json({ msg: "User dont exists" });
    }

    res.send(user);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
});

module.exports = router;

/*
| Feature                   | `Document.save()`     | `Model.create()`               | `Model.insertOne()`         |
| --------------------------| --------------------  | -----------------------------  | --------------------------- |
| Validation                | ✅ Yes                | ✅ Yes                         | ❌ No                       |
| Mongoose Middleware       | ✅ Yes (`save` hooks) | ✅ Yes (`save` hooks)          | ❌ No                       |
| Returns Mongoose Document | ✅ Yes                | ✅ Yes                         | ❌ No                       |
| Input Type                | Mongoose instance     | Plain object(s)                | Plain object(s)             |
| Can handle arrays         | ❌ No                 | ✅ Yes                         | ✅ Yes                      |
| Use case                  | One doc w/ logic      | Multiple docs with validation  | Fast bulk insert, low-level |

✨ Key Features:
   - Accepts a plain object or an array of objects.

   - Internally creates Mongoose documents and calls .save() on each.

   - Runs validation and middleware, just like .save().

   - Easier and cleaner than creating instances and saving manually.

   - Suitable for bulk inserts with validation.

   ✅ What is a Mongoose Instance?
   
   A Mongoose instance is when you create an object from a Mongoose model using the new keyword. 
   It's like creating a document manually — it gives you access to instance methods, middleware (save() hooks), and validation.
*/
