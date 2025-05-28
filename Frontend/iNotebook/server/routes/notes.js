const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let obj = {
    name: "nuluna",
    class: "suking",
  };

  res.json(obj);
});

module.exports = router;