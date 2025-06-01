const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// ROUTE 1 => Fetch all Notes: GET"/api/note/fetchallnote".  Login Required
router.get("/fetchallnote", fetchuser, async (req, res) => {

// flag
let success = false;

  try {
    let allNotes = await Note.find({ ownerID: req.user.id });
    success = true;
    res.json({success, allNotes});
  } catch (err) {
    success = false;
    res.status(500).json({ success, errMsg: err.message });
  }
});

//ROUTE 2 => Create a Note: POST"/api/note/createnote". Login Required
router.post(
  "/createnote",
  fetchuser,
  [
    body("title", "Enter Valid Title").isLength({ min: 5 }),
    body("description", "Enter valid Description").isLength({ min: 10 }),
    body("tag", "Please give space between 2 tags "),
  ], // we want to verify note input , cannot take any input in DB
  async (req, res) => {
    const errors = validationResult(req);

    // if errros got  -> return them back
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errMsg1: errors.array() });
    }

    try {
      let { title, description, tag } = req.body;

  
      let updatedNote = new Note({
        ownerID: req.user.id,
        title: title,
        description: description,
        tag: tag,
      });

      let newNote = await updatedNote.save();

      success = true;
      res.status(200).json({success ,newNote});
    } catch (err) {
      success = false;
      res.status(500).json({success, errMsg: err.message });
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
    body("tag", "Please give space between 2 tags "),
  ], // we want to verify note input , cannot take any input in DB
  async (req, res) => {
    const errors = validationResult(req);

    // if errros got  -> return them back
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({  success, errMsg1: errors.array() });
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

      if (tag) {
        updatedNote.tag = tag;
      }

      // find note exist or not
      const existedNote = await Note.findById(req.params.id);

      //if not exists -> return them back
      if (!existedNote) {
        success = false;
        return res.status(404).send(success, "Not Found");
      }

      // check current user is Owner of Note ?
      if (req.user.id !== existedNote.ownerID.toString()) {
        success = false;
        return res.status(401).send({ success, errMsg:"Unauthorized access"});
      }

      // if it is Owner
      let editedNote = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: updatedNote },
        { new: true }
      );

      success = true;
      res.status(200).json({success, editedNote});
    } catch (err) {
      success = false;
      res.status(500).json({ success, errMsg: err.message });
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
    success = false;
    return res.status(404).json({success, errMsg: "note does not exists" });
  }

  // if exists -> check current user is owner or not
  if (req.user.id !== existingNote.ownerID.toString()) {
    success = false;
    return res.status(401).json({success ,errMsg: "Unauthorized Access" });
  }

  // if it is owner
  let deletedNote = await Note.findByIdAndDelete(existingNote._id);
  console.log(deletedNote)

  success = true;
  res
    .status(200)
    .json({ success, deletedNote});
 }catch (err){
  success = false;
  res.status(500).json({success ,errMsg: err.message});
 }
});

module.exports = router;
