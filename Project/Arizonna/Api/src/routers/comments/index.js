const express = require("express");
const router = express.Router();

const postCommentRouter = require("./post.comments");

router.use(postCommentRouter);

module.exports = router;
