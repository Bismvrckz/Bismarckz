const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../lib/token");
const { user } = require("../../../models");
const { Op } = require("sequelize");
const { auth } = require("../../helpers/auth");
const { uploadAvatar } = require("../../lib/multer");

const updateUserProfilePicture = async (req, res, next) => {
  try {
    const { username } = req.user;
    const { filename } = req.file;
    const updateImageUser = await user.findOne({ where: username });
    const { dataValues } = updateImageUser;
    console.log({ dataValues });
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
