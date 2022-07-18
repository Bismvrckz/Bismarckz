const { user } = require("../models");
const path = require("path");
const appRoot = require("app-root-path");

const createUser = async () => {
  try {
    const res = await user.create({
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
    const resFindUser = await user.findOne({ where: { username: "1234" } });
    console.log(resFindUser == true);
  } catch (error) {
    console.log({ error });
  }
};

// findUser();
// createUser();

const pathTest = path.join(appRoot.path, "public", "images", "ariznLogo.png");

console.log(pathTest);
