const express = require("express");
const router = express.Router();

const commentController = require("../controllers/commentController");
const validation = require("./validation");

 // #2
router.post("/posts/:id/comments/create",
  validation.validateComments,
  commentController.create);

 // #3
router.post("/posts/:id/comments/:id/destroy",
  commentController.destroy);

module.exports = router;
