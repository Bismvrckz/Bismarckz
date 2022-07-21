const { user } = require("../models");
const { post } = require("../models");
const { like } = require("../models");
const path = require("path");
const appRoot = require("app-root-path");

const createUser = async () => {
  try {
    const res = await user.create({
      user_id: 1657973845517,
      username: "abcdef",
      email: "mail@mdefail.com",
      user_password: "123",
      bio: "Bio lorem ipsum sit dolor amet",
    });
    console.log("success");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const findUser = async () => {
  try {
    const resFindUser = await post.findAll({
      where: { user_id: 1658382703336 },
      include: {
        model: like,
        as: "postLikes",
      },
    });
    console.log(resFindUser);
  } catch (error) {
    console.log({ error });
  }
};

findUser();
// createUser();

const pathTest = path.join(appRoot.path, "public", "images", "ariznLogo.png");

console.log(pathTest);
