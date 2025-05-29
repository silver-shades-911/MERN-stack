const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  ownerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: [String],
    default: "general",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
