const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// ROUTE 1 => Fetch all Notes: GET"/api/note/fetchallnote".  Login Required
router.get("/fetchallnote", fetchuser, async (req, res) => {
  try {
    let allNotes = await Note.find({ ownerID: req.user.id });
    res.json(allNotes);
  } catch (err) {
    res.status(500).json({ errMsg: err.message });
  }
});

//ROUTE 2 => Create a Note: POST"/api/note/createnote". Login Required
router.post(
  "/createnote",
  fetchuser,
  [
    body("title", "Enter Valid Title").isLength({ min: 5 }),
    body("description", "Enter valid Description").isLength({ min: 10 }),
    body("tag", "Please give space between 2 tags ").isString().notEmpty(),
  ], // we want to verify note input , cannot take any input in DB
  async (req, res) => {
    const errors = validationResult(req);

    // if errros got  -> return them back
    if (!errors.isEmpty()) {
      return res.status(400).json({ errMsg1: errors.array() });
    }

    try {
      let { title, description, tag } = req.body;

      // tag split into array
      tag = tag.split(" ").filter((t) => t.trim() !== "");

      let updatedNote = new Note({
        ownerID: req.user.id,
        title: title,
        description: description,
        tag: tag,
      });

      let result = await updatedNote.save();

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ errMsg: err.message });
    }
  }
);

// ROUTE 3 => Update an Existing Note: PUT"/api/note/updatenote".  Login Required
router.put(
  "/updatenote/:id",
  fetchuser,
  [
    body("title", "Enter Valid Title").isLength({ min: 5 }),
    body("description", "Enter valid Description").isLength({ min: 10 }),
    body("tag", "Please give space between 2 tags ").isString().notEmpty(),
  ], // we want to verify note input , cannot take any input in DB
  async (req, res) => {
    const errors = validationResult(req);

    // if errros got  -> return them back
    if (!errors.isEmpty()) {
      return res.status(400).json({ errMsg1: errors.array() });
    }

    try {
      let { title, description, tag } = req.body;

      const updatedNote = {}; // create obj for updated data

      // check what updated field is comming , no need to update whole document
      if (title) {
        updatedNote.title = title;
      }
      if (description) {
        updatedNote.description = description;
      }

      // tag split into array
      tag = tag.split(" ").filter((t) => t.trim() !== "");

      if (tag) {
        updatedNote.tag = tag;
      }

      // find note exist or not
      const existedNote = await Note.findById(req.params.id);

      //if not exists -> return them back
      if (!existedNote) {
        return res.status(404).send("Not Found");
      }

      // check current user is Owner of Note ?
      if (req.user.id !== existedNote.ownerID.toString()) {
        return res.status(401).send("Unauthorized access");
      }

      // if it is Owner
      let result = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: updatedNote },
        { new: true }
      );

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ errMsg: err.message });
    }
  }
);

// ROUTE 4 => Delete an Existing Note: DELETE"/api/note/deletenote/:id". Login Required

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
 try{
   // taking deleteing note id from route
  let noteID = req.params.id;

  // checking note exist or not
  let existingNote = await Note.findById(noteID);

  // if note not exists
  if (!existingNote) {
    return res.status(404).json({ errMsg: "note does not exists" });
  }

  // if exists -> check current user is owner or not
  if (req.user.id !== existingNote.ownerID.toString()) {
    return res.status(401).json({ errMsg: "Unauthorized Access" });
  }

  // if it is owner
  let result = await Note.findByIdAndDelete(existingNote._id);
  res
    .status(200)
    .json({ success: `Note having ID ${result._id} is Deleted Successful` });
 }catch (err){
  res.status(500).json({errMsg: err.message});
 }
});

module.exports = router;
