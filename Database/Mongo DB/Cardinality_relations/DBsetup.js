// --------- CARDINALITY RELATIONSHIPS MONGODB --------

// getting-started.js
const mongoose = require("mongoose");
main();
 
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/cardinality_Demo")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


module.exports = mongoose;