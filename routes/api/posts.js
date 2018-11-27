const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const bcrypt = require("bcryptjs");

// Post model
const Post = require("../../models/post");

// Validation
const validatePostInput = require("../../validation/post");

// @router GET api/posts/test
// @desc test posts route
router.get("/test", (req, res) =>
  res.json({
    msg: "posts Works"
  })
);

// @router GET api/posts
// @desc GET post
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404));
});

// @router POST api/posts
// @desc Create post
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validtion
    if (!isValid) {
      // If any errors, send 400 with error object
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      email: req.body.email,
      user: req.user.id
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPost.text, salt, (err, hash) => {
        if (err) throw err;
        newPost.textEncrypt = hash;
        newPost.save().then(post => res.json(post));
      });
    });
  }
);

module.exports = router;
