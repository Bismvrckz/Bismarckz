const express = require("express");
const router = express.Router();
const { auth } = require("../../helpers/auth");
const { post } = require("../../../models");

const editPostCaption = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

router.patch("editCaption", editPostCaption);

module.exports = router;
