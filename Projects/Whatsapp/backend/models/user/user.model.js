import mongoose from "mongoose";

// user schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileUrl: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["boy", "girl"],
  },
});

// user model
const user = mongoose.model("User", userSchema);

export default user;
