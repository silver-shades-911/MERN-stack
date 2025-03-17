
// ###### APPROACH 1) ONE TO FEW

const mongoose = require("./DBsetup.js");
// schema

const userSchema = new mongoose.Schema({
    username: {
      type: String,
    },
    addresses: [
      {
        location: String,
        city: String,
      },
    ],
  });
    
  const User = mongoose.model("User", userSchema);
  
  async function addUsers() {
    let user1 = new User({
      username: "Chima Sakuragava",
      addresses: [
        {
          location: "B-P12 Baker Street ",
          city: "Downtown",
        },
      ],
    });
    // add another address
    user1.addresses.push({ location: "P12 Majiya Wendeder", city: "kyoto" });
    let result = await user1.save();
    console.log(result);
  };
  
  addUsers();
  