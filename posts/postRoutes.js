const express = require("express");
const router = express.Router();
const db = require("../data/db.js");

// get all posts
router.get("/", (req, res) => {
  db.find()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({
        error: "The posts information could not be retrieved."
      });
    });
});

module.exports = router;
