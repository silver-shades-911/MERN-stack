/*  
  ? What Are Cookies?
    Cookies are small pieces of data stored in the user's browser.
    They are sent from the server to the client and stored on the client’s machine. 
    Each subsequent request from the client will include the cookie data, making cookies useful for:
        - Session management (e.g., login sessions).
        - Personalization (e.g., user preferences).
        - Tracking (e.g., analytics and user behavior).
*/
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// middleware for cookies
app.use(cookieParser("secretcode"));

// cookies 
// Random route 
app.get("/random", (req, res) => {
    res.cookie("username", "@_asim_123"); // we send cookies in form of Name-value pair , here "username" is name and "@_asim_123" is value
   res.send("This route is used to send cookies");
});

app.get("/info", (req, res)=> {
    let { username } = req.cookies;
    console.dir(req.cookies);
    res.send(`Hi, ${username}`);
});

// signedCookies
app.get("/getsignedcookies", (req, res) => {
    res.cookie("made-in", "India", {signed : true}); //* signed cookies are encrypted cookies, their value is encrypted
    res.send("This page is use to send signedCookies");
});

// Accessing both signed and unsigned cookies
app.get("/verify", (req, res) => {
 console.log("Unsigned cookies :- ", req.cookies); // cookies are stored in req.cookies
 console.log("Signed cookies :- ", req.signedCookies); // signed cookies are stored in req.signedCookies



 res.send("This page get both Signed and Unsigned cookies and print");
});


app.listen(3000, () => {
    console.log("server is running on port @3000");
});
