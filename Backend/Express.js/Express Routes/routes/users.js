const express = require("express");
const router = express.Router();

// USERS

// /users 
router.get("/", (req, res) => {
    res.send("This is users route");
 });
 
 
 // /users/show/:id
 router.get("/:id/show", (req, res) => {
     let { id } = req.params;
     res.send(`This is Users show route for ID - ${id}`);
 });
 
 
 // /users/update/:id
 router.get("/:id/update", (req, res) => {
     let { id } = req.params;
     res.send(`This is Users update route for ID - ${id}`);
 });
  
 
 // /users/delete/:id
 router.get("/:id/delete", (req, res) => {
     let { id } = req.params;
     res.send(`This is Users Delete route for ID - ${id}`);
 });
 

 module.exports = router;