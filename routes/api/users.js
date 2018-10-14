const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Load User Model
const User = require("../../models/user");

// @router GET api/users/test
// @desc test users route
router.get("/test", (req, res) =>
  res.json({
    msg: "users Works"
  })
);

// @router POST api/user/register
// @desc register
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: `Email already exists` });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
