const express = require("express");
const router = express.Router();

const getPostsRouter = require("./get.posts");

router.use(getPostsRouter);

module.exports = router;
