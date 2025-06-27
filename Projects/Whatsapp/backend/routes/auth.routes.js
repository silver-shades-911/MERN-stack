import express from "express";
import {
  signupController,
  loginController,
  logoutController,
} from "../controllers/auth/auth.controllers.js";

const router = express.Router();

//signup
// ROUTE 1 => Create a User using : POST "/api/auth/signup". Does not require login
router.get("/signup", signupController);

//login
// ROUTE 2 => Login a User using : POST "/api/auth/login". Does not require login
router.get("/login", loginController);

//logout
// ROUTE 3 => Logout a User using : GET "/api/auth/logout". Required login
router.get("/logout", logoutController);

export default router;
