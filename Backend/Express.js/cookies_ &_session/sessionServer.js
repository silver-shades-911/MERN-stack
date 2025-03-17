const express = require("express");
const app = express();
const session = require("express-session");
const ejs = require("ejs");
const path = require("path");
var flash = require("connect-flash");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/"));

// session set-up and initialize
app.use(
    session({
        secret: "mySuperSecretString",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(flash());

app.get("/test", (req, res) => {
    res.send("This is randome route to test session ");
});

// ## small activity
app.get("/sessionCount", (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`You send a req to server ${req.session.count} times`);
});

// ## another small activity , storing and accessing data in req.session object

// make middleware to save flash in locals after generating them 
app.use((req, res, next) => {
    res.locals.success = req.flash("successful");
    res.locals.error = req.flash("error");
    next();
})

// flash-msg use
app.get("/register", (req, res) => {
    let { name = "anyonamus" } = req.query;
    req.session.name = name; // storing into session object
    // flash msg setup
    if (name == "anyonamus") {
        req.flash("error", "User is not registered");
    } else {
        req.flash("successful", "New user is registered successfully");
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    console.log("Session Object :- ", req.session);
    let name = req.session.name; //accessing session object
    res.render("hello.ejs", {name});
});

app.listen(3000, () => {
    console.log("server is running on port @3000");
});
