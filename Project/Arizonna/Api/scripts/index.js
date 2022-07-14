const { users } = require("../models");

const createUser = async () => {
  try {
    const res = await users.create({
      username: "abcdef",
      email: "mail@mdefail.com",
      user_password: "123",
    });
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

createUser();
