const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// middleware for cookies
app.use(cookieParser("secretcode"));

// cookies 
// Random route 
app.get("/random", (req, res) => {
    res.cookie("username", "@_asim_123");
   res.send("This is random route");
});

app.get("/info", (req, res)=> {
    let { username } = req.cookies;
    console.dir(req.cookies);
    res.send(`Hi, ${username}`);
});

// signedCookies
app.get("/getsignedcookies", (req, res) => {
    res.cookie("made-in", "India", {signed : true});
    res.send("This is just a random page use to send signedCookies");
});

// verify
app.get("/verify", (req, res) => {
 console.log("Unsigned cookies :- ", req.cookies);
 console.log("Signed cookies :- ", req.signedCookies);
 res.send("This page get both Signed and Unsigned cookies and print");
});


app.listen(3000, () => {
    console.log("server is running on port @3000");
});
