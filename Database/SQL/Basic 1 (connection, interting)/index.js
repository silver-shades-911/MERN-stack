const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

/*
  Function: createRandomUser
  - Uses Faker to generate a random user.
  - Returns an array with:
      1. A unique UUID (used as the user ID).
      2. A random username.
      3. A random email address.
      4. A random password.
*/
function createRandomUser() {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// Output one random user (for testing purposes)
console.log(createRandomUser());

/*
  MySQL Database Connection Setup
  - Establishes a connection to the MySQL database using mysql2.
  - Connection parameters include host, user, database name, and password.
*/
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Dummy_DB",
  password: "7798111340",
});

/*
  SQL Query to Insert Data
  - The query uses a parameterized INSERT statement to insert multiple rows into the 'users' table.
  - The "?" placeholder is used for bulk insert of user data.
*/
let query = "insert into users (id, username, email, password) values ?";

// Prepare an array to hold multiple user data entries
let user_data = [];

/*
  Generate Multiple Random Users
  - Loop creates 100 random users using createRandomUser.
  - Each generated user (an array) is pushed into the user_data array.
  - This creates a two-dimensional array where each inner array represents one user record.
*/
for (let i = 0; i < 100; i++) {
  user_data.push(createRandomUser());
}

/*
  Execute the SQL Query
  - Uses connection.query() to run the INSERT statement.
  - [user_data] is passed as the parameter to bulk insert all generated users.
  - Errors are handled by throwing an exception which is caught in the catch block.
*/
try {
  connection.query(query, [user_data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (error) {
  console.log(error);
}

/*
  End the Database Connection
  - connection.end() ensures that the connection to the database is properly closed after executing the query.
*/
connection.end();
