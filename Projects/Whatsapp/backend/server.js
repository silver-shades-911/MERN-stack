// packages import
import express from "express";
import dotenv from "dotenv";

/*

You need to configure cookie-parser in server.js with your secret so that signed cookies can be verified when they're received. <=

*/
import cookieParser from "cookie-parser";

// modules import
import authRoute from "./routes/auth.routes.js";
import connectToMongoDB from "./Database/DB.config.js";

// dont.env configuration
dotenv.config();

// variables
const app = express();
const port = process.env.PORT;

//build-in middlewares
app.use(express.urlencoded());
app.use(express.json());

// signedCookie middleware
app.use(cookieParser(process.env.SIGNED_COOKIE_SECRET_KEY)); // Secret required for signing

// root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
  connectToMongoDB();
});
