const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");

//USERS
app.use("/users", users);


// POSTS
app.use("/posts", posts);


app.listen(3000, () => {
    console.log("server is running on port @3000");
});
