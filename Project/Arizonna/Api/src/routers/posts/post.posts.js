const express = require("express");
const router = express.Router();
const { post } = require("../../../models");
const { auth } = require("../../helpers/auth");

const newUserPosts = (req, res, next) => {
  try {
    console.log(req.params);
    res.send({
      status: "Success",
      message: "New user post",
    });
  } catch (error) {
    next(error);
  }
};

router.post("/newPosts/:user_id", newUserPosts);

module.exports = router;
