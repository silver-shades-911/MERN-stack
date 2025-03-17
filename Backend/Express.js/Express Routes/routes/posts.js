const express = require("express");
const router = express.Router();

// POSTS

// /posts 
router.get("/", (req, res) => {
    res.send("This is posts route");
 });
 
 
 // /posts/show/:id
 router.get("/show/:id", (req, res) => {
     let { id } = req.params;
     res.send(`This is posts show route for ID - ${id}`);
 });
 
 
 // /posts/update/:id
 router.get("/update/:id", (req, res) => {
     let { id } = req.params;
     res.send(`This is posts update route for ID - ${id}`);
 });
 
 
 // /posts/delete/:id
 router.get("/delete/:id", (req, res) => {
     let { id } = req.params;
     res.send(`This is posts Delete route for ID - ${id}`);
 });

 module.exports = router;