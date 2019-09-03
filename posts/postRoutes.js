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

// create new post
router.post("/", (req, res) => {
  const newPost = req.body;

  if (newPost.title && newPost.contents) {
    db.insert(newPost)
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the post to the database"
        });
      });
  } else {
    res
      .status(400)
      .json({
        errorMessage: "Please provide title and contents for the post."
      });
  }
});

module.exports = router;
