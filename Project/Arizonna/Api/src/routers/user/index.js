const express = require("express");
const router = express.Router();

const postUserRouter = require("./peripherals/post.user");
const getUserRouter = require("./peripherals/get.user");

router.use(postUserRouter);
router.use(getUserRouter);

module.exports = router;
