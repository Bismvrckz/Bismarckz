const express = require("express");
const router = express.Router();

const postUserRouter = require("./user/post.user");
const getUserRouter = require("./user/get.user");

router.use(postUserRouter);
router.use(getUserRouter);

module.exports = router;
