const multer = require("multer");
const path = require("path");
const appRoot = require("app-root-path");
const { error } = require("console");

const avatarPath = path.join(appRoot.path, "public", "userAvatar");

const avatarStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, avatarPath);
  },
  filename: function (req, file, cb) {
    const { username } = req.user.dataValues;
    cb(null, `${username}-avatar.png`);
  },
});

const uploadAvatar = multer({
  storage: avatarStorage,
  limits: {
    fileSize: 10485760,
  },
  fileFilter(req, file, cb) {
    const allowedExtension = [".png", ".jpg", ".jpeg"];

    const extname = path.extname(file.originalname);

    if (!allowedExtension.includes(extname)) {
      const error = new error(
        "Please upload a valid extension (jpg, jpeg, png)."
      );
      return cb(error);
    }

    cb(null, true);
  },
});

module.exports = { uploadAvatar };
