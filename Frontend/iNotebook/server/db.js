const mongoose = require('mongoose');


async function connectToMongo() {
  await mongoose.connect('mongodb://127.0.0.1:27017/iNotebook');
  console.log("mongoDB is connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = connectToMongo;