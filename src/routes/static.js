const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Post and Comment!");
});

module.exports = router;
