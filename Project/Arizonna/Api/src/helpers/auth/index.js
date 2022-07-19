const { verifyToken } = require("../../lib/token");
const { user } = require("../../../models");

async function auth(req, res, next) {
  try {
    const token = req.token;

    console.log({ token });

    const verifiedToken = verifyToken(token);

    const resGetUser = await user.findOne({
      where: { user_id: verifiedToken.user_id },
    });

    if (!resGetUser) {
      throw { message: "User not found" };
    }
    const { dataValues } = resGetUser;
    // console.log(resGetUser);
    req.user = { dataValues };
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = { auth };
