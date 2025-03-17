const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
//uuidv4();  ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// SOLUTION : html forms cannot send other requests other than GET & POST
let methodOverride = require("method-override");
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let posts = [
  {
    id: uuidv4(),
    username: "dacia-9080",
    content: "I am the Computer Robot",
  },
  {
    id: uuidv4(),
    username: "darknightmon-65",
    content: "I am anime fan ,bro",
  },
  {
    id: uuidv4(),
    username: "red-dragon",
    content: "i just finished my, tenpere series ",
  },
];

// this get light-house for rendering home page of posts (light-house:  my way to get/post)
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// this get light-house is for rendering new post template
app.get("/posts/new", (req, res) => {
  res.render("newPost.ejs");
});

// from that new post template there is also one light-housee in form,  we send post request to below Post light-house

// this post light-house is receive request from new post (light-house)

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  console.log(username, content);

  // we take new post data from new post page , then when deplaying it on home/posts page , we add id for each new one
  let id = uuidv4();
  posts.push({ id, username, content });
  // res.send("user new post is send to server , Successfully");

  // redirect to another lighthouse
  res.redirect("/posts"); // by default it send GET request
});

// Seeing each post in detail mechanisum
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);

  let post = posts.find((post) => id === post.id);
  // go in posts array and ,which posts id match with ur params ,return back that post object

  console.log(post);

  res.render("detailPost.ejs", { post });
});

//post edit mechanisum

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);

  let post = posts.find((post) => id === post.id);

  // new edited content
  let newContent = req.body.content;
  console.log("edited content:", newContent);

  post.content = newContent;

  console.log("patch request working");

  res.redirect("/posts");
});

// light-house to redirect to edit post page

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => id == post.id);
  res.render("edit.ejs", { post });
});

// Post Delete mechanisum ,setting Destroy Path

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  console.log("Delete Post successful");

  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("server is started @ port 8080");
});
