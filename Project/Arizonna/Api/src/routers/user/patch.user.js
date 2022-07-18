const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../lib/token");
const { user } = require("../../../models");
const { Op } = require("sequelize");
const { auth } = require("../../helpers/auth");
const { uploadAvatar } = require("../../lib/multer");

const updateUserProfilePicture = async (req, res, next) => {
  try {
    const { username } = req.user.dataValues;
    const updateImageUser = await user.findOne({ where: { username } });
    await updateImageUser.update({
      user_avatar: `http://localhost:2000/userAvatar/${username}-avatar.png`,
    });
    const resUpdateProfilePicture = await updateImageUser.save();

    res.send({
      status: "Success",
      message: "Success update profile picture",
      detail: { resUpdateProfilePicture },
    });
  } catch (error) {
    next(error);
  }
};

router.patch(
  "/avatar",
  auth,
  uploadAvatar.single("newAvatar"),
  updateUserProfilePicture
);

module.exports = router;
