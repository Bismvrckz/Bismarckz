const { user } = require("../models");

const createUser = async () => {
  try {
    const res = await user.create({
      username: "abcdef",
      email: "mail@mdefail.com",
      user_password: "123",
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
createUser();
