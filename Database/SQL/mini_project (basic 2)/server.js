const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
var methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

// Middleware for parsing request bodies (JSON and URL-encoded data)
// This allows you to access form data via req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable HTTP method override to support browsers that don't send PATCH/DELETE natively
// The query parameter ?_method=DELETE will trigger the DELETE method
app.use(methodOverride("_method"));

// Set up the EJS view engine and define the folder for view templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/"));

// Establish a connection to the MySQL database with proper credentials
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Dummy_DB",
  password: "7798111340",
});

/*
  Home Route (GET "/")
  - Purpose: Show a simple homepage with the total number of users in the DB.
  - Data Flow: Queries the DB to count users, then passes that count to the home.ejs view.
*/
app.get("/", (req, res) => {
  let q1 = "select count(*) from users";
  try {
    connection.query(q1, (error, result) => {
      if (error) throw error;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
  }
});

/*
  Users List Route (GET "/users")
  - Purpose: Retrieve and display all user records.
  - Data Flow: Executes a SQL query to select all users, then renders users.ejs passing the retrieved data.
*/
app.get("/users", (req, res) => {
  let q2 = "select * from users";
  try {
    connection.query(q2, (error, result) => {
      if (error) throw error;
      let users_data = result;
      res.render("users.ejs", { users_data });
    });
  } catch (error) {
    console.log(error);
  }
});

/*
  Edit User Form Route (GET "/users/:id/edit")
  - Purpose: Retrieve a single user's data and render an edit form.
  - Data Flow: Extracts user ID from URL params, queries the DB for that user, and passes the user data to edit.ejs.
*/
app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let q3 = `select * from users where id = '${id}'`;
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

/*
  Update User Route (PATCH "/users/:id")
  - Purpose: Update a user's username after verifying the provided password.
  - Data Flow: 
      1. Extract user ID from URL and password/newUsername from req.body.
      2. Query the DB to validate the current password.
      3. If valid, execute an update query to change the username.
      4. Redirect to the users list after a successful update.
*/
app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { password, newUsername } = req.body;
  let q4 = `select * from users where id = '${id}'`;
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

/*
  New User Signup Form Route (GET "/users/new")
  - Purpose: Render a form for creating a new user.
  - Data Flow: Simply renders the newUser.ejs view.
*/
app.get("/users/new", (req, res) => {
  res.render("newUser.ejs");
});

/*
  Create New User Route (POST "/users/new")
  - Purpose: Insert a new user into the database.
  - Data Flow: 
      1. Extract user details (username, email, password) from req.body.
      2. Generate a unique ID using UUID.
      3. Build a new user array and execute a parameterized INSERT query.
      4. Redirect to the users list after a successful insert.
*/
app.post("/users/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  let query5 = "insert into users (id, username, email, password) values ?";
  let newUser = [[id, username, email, password]];

  try {
    connection.query(query5, [newUser], (error) => {
      if (error) throw error;
      res.redirect("/users");
    });
  } catch (error) {
    console.error(error);
  }
});

/*
  Delete User Route (DELETE "/users/:id/delete")
  - Purpose: Remove a user from the database.
  - Data Flow: 
      1. Extract the user ID from the URL params.
      2. Execute a DELETE SQL query to remove the user.
      3. Redirect to the users list after deletion.
*/
app.delete("/users/:id/delete", (req, res) => {
  let { id } = req.params;
  let query6 = `delete from users where id = '${id}'`;
  try {
    connection.query(query6, (error) => {
      if (error) throw error;
      res.redirect("/users");
    });
  } catch (error) {
    console.error(error);
  }
});

// Start the server on port 8080
app.listen(8080, () => {
  console.log("server is started at port 8080");
});
