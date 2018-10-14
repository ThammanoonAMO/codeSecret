const express = require("express");
const router = express.Router();

// @router GET api/compile/test
// @desc test compile route
router.get("/test", (req, res) =>
  res.json({
    msg: "compile Works"
  })
);

module.exports = router;
