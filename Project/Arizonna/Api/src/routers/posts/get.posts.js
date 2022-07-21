const express = require("express");
const router = express.Router();
const { post } = require("../../../models");
const { auth } = require("../../helpers/auth");

const getUserPosts = async (req, res, next) => {
  try {
    const { user_id } = req.user.dataValues;

    const resGetUserPosts = await post.findAll({ where: { user_id } });

    console.log(resGetUserPosts);

    res.send({
      status: "Success",
      message: "Success get user posts",
      data: resGetUserPosts,
    });
  } catch (error) {
    next(error);
  }
};

router.get("/", auth, getUserPosts);

module.exports = router;
