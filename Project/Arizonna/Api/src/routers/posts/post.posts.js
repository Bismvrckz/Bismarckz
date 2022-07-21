const express = require("express");
const router = express.Router();
const { post } = require("../../../models");
const { auth } = require("../../helpers/auth");
const { uploadPosts } = require("../../lib/multer");

const newUserPosts = async (req, res, next) => {
  try {
    const postCount = req.userPost.length;
    // console.log(req);
    const { user_id } = req.params;
    const currentDate = new Date();
    const postId_maker = currentDate.getTime();
    const { username } = req.user.dataValues;

    const resCreateUserPost = await post.create({
      user_id,
      post_id: `${username}-${postId_maker}`,
      postImage: `http://localhost:2000/userPosts/${username}-post-${postCount}.png`,
      caption: req.body.caption,
    });

    res.send({
      status: "Success",
      message: "New user post",
      detail: {
        resCreateUserPost,
      },
    });
  } catch (error) {
    next(error);
  }
};

router.post(
  "/newPosts/:user_id",
  auth,
  uploadPosts.single("newPosts"),
  newUserPosts
);

module.exports = router;
