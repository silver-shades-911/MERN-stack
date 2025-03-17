const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

function createRandomUser() {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
}

console.log(createRandomUser());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Dummy_DB",
  password: "7798111340",
});

let query = "insert into users (id, username, email, password) values ?";

let user_data = [];

for (let i = 0; i < 100; i++) {
  user_data.push(createRandomUser());
}

try {
  connection.query(query, [user_data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (error) {
  console.log(error);
}

connection.end();
