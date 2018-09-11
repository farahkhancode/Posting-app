const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController")
 const helper = require("../auth/helpers");


router.get("/posts", postController.index);
router.get("/posts/new", postController.new);

router.post("/posts/create", helper.ensureAuthenticated, postController.create);
router.get("/posts/:id", postController.show);

router.post("/posts/:id/destroy", postController.destroy);

router.get("posts/:id/edit", postController.edit);
router.post("posts/:id/update", postController.update);

module.exports = router;
