const express = require("express");
const router = express.Router();

const postUserRouter = require("./post.user");
const getUserRouter = require("./get.user");

router.use(postUserRouter);
router.use(getUserRouter);

module.exports = router;
