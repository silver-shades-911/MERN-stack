const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
var methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

// Middleware for parsing JSON and URL-encoded data
app.use(express.json()); // For JSON payloads
app.use(express.urlencoded({ extended: true })); // For URL-encoded payloads

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Dummy_DB",
  password: "7798111340",
});

// we already created database and inserted 100 users data using faker ..go and read basic1 folders

// Home route
app.get("/", (req, res) => {
  let q1 = "select count(*) from users";
  try {
    connection.query(q1, (error, result) => {
      if (error) throw error;

      //   console.log(result[0]["count(*)"]);

      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
  }
});

// users route
app.get("/users", (req, res) => {
  q2 = "select * from users";

  try {
    connection.query(q2, (error, result) => {
      if (error) throw errow;

      let users_data = result;
      // console.log(users_data);

      res.render("users.ejs", { users_data });
    });
  } catch (error) {
    console.log(error);
  }
});

// edit route
app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;

  q3 = `select * from users where id = '${id}'`;

  try {
    connection.query(q3, (error, result) => {
      if (error) throw error;

      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (error) {
    console.log(error);
  }
});

// update (DB) route
app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { password, newUsername } = req.body;

  // res.send({ password, newUsername });
  // console.log({ password, newUsername });
  q4 = `select * from users where id = '${id}'`;
  try {
    connection.query(q4, (error, result) => {
      if (error) throw error;
      let user = result[0];
      if (password != user.password) {
        res.send("Wrong Password, Try again");
      } else {
        let q2 = `update users set username = '${newUsername}' where id = '${id}'`;

        try {
          connection.query(q2, (error, result) => {
            if (error) throw error;
            res.redirect("/users");
            // console.log(result);
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// move to new user signup page
app.get("/users/new", (req, res) => {
  // console.log(req);

  res.render("newUser.ejs");
});

// POST: /users/new

app.post("/users/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();

  let query5 = "insert into users (id, username, email, password) values ?";
  let newUser = [[id, username, email, password]];

  console.log(newUser);

  try {
    connection.query(query5, [newUser], (error) => {
      if (error) throw error;
      res.redirect("/users");
    });
  } catch (error) {
    console.error(error);
  }
});

// DELETE : delete user

app.delete("/users/:id/delete", (req, res)=>{
  let {id} = req.params;
  
  // console.log(req.params);
  console.log(id);
  
  let query6 = `delete from users where id = '${id}'`;
  try{
    connection.query(query6, (error)=>{
      if (error) throw error;
      res.redirect("/users");
    })
  }catch(error){
    console.error(error);
  }
});

app.listen(8080, () => {
  console.log("server is started at port 8080");
});
