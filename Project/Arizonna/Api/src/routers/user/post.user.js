const express = require("express");
const { fieldIsEmpty } = require("../../helpers");
const router = express.Router();
const pool = require("../../lib/database");
const validator = require("email-validator");
const { hash, compare } = require("../../lib/bcryptjs");
const { createToken } = require("../../lib/token");
const { sendVerificationMail } = require("../../lib/email-auth");
const taiPasswordStrength = require("tai-password-strength");

const userRegister = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    const emptyFields = fieldIsEmpty({
      username,
      email,
      password,
    });

    if (emptyFields.length) {
      throw {
        code: 400,
        message: "Empty fields",
        detail: `Empty fields: ${emptyFields}`,
      };
    }

    const validEmail = validator.validate(email);

    if (!validEmail) {
      throw {
        code: 400,
        message: "Wrong email format",
        detail: email,
      };
    }

    const strengthTester = new taiPasswordStrength.PasswordStrength();
    const results = strengthTester.check(password);
    const { number, upper, symbol, passwordLength } = results.charsets;
    console.log(password);
    console.log(results);

    if (!number || !upper || !symbol || passwordLength < 8) {
      throw {
        code: 400,
        message:
          "Passwords should contain at least 8 characters including an uppercase letter, a symbol, and a number.",
        detail: { password },
      };
    }

    if (password != confirmPassword) {
      throw {
        code: 400,
        message: "Password does not match",
        detail: `Password: ${password}, Confirm Password: ${confirmPassword}`,
      };
    }

    const connection = pool.promise();

    const sqlGetUser = `SELECT username, email FROM users WHERE username = ? OR email = ?`;
    const sqlGetUserArguments = [username, email];
    const [getUserResult] = await connection.query(
      sqlGetUser,
      sqlGetUserArguments
    );

    if (getUserResult.length) {
      if (getUserResult[0].username == username) {
        throw {
          code: 400,
          message: "Username already used",
          detail: {
            databaseUsername: getUserResult[0],
            clientUsername: username,
          },
        };
      } else if (getUserResult[0].email == email) {
        throw {
          code: 400,
          message: "Email already used",
          detail: { databaseEmail: getUserResult[0], clientEmail: email },
        };
      }
    }

    const date = new Date();
    const userIdMaker = date.getTime();

    const encryptedPassword = hash(password);

    const sqlCreateNewUser = `INSERT into USERS set ?`;
    const createUserData = [
      {
        user_id: userIdMaker,
        username,
        email,
        user_password: encryptedPassword,
      },
    ];

    const [createNewUserResult] = await connection.query(
      sqlCreateNewUser,
      createUserData
    );

    const token = createToken({ user_id: userIdMaker, username });

    sendVerificationMail({ email, token, username });

    res.send({
      status: "Success",
      message: "Success resgister user",
      data: {
        result: createNewUserResult,
      },
    });
  } catch (error) {
    next(error);
  }
};

const userLogin = async (req, res, next) => {
  try {
    const { usernameOrEmail, password } = req.body;

    const connection = pool.promise();

    const sqlGetUser = `SELECT user_id, username, user_password, isVerified FROM users WHERE email = '${usernameOrEmail}' OR username = '${usernameOrEmail}';`;

    const [resGetUser] = await connection.query(sqlGetUser);

    if (!resGetUser.length) {
      throw {
        code: 404,
        message: "User doesn't exist",
      };
    }

    const user = resGetUser[0];

    // if (!user.isVerified) {
    //   throw {
    //     code: 403,
    //     message: "User is not verified",
    //   };
    // }

    const isPasswordMatch = compare(password, user.user_password);

    if (!isPasswordMatch) {
      throw {
        code: 401,
        message: "Incorrect password",
      };
    }

    const token = createToken({
      user_id: user.user_id,
      username: user.username,
    });

    res.send({
      status: "Success",
      message: "Login success",
      data: {
        result: {
          user_id: user.user_id,
          username: user.username,
          accessToken: token,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

router.post("/register", userRegister);
router.post("/login", userLogin);

module.exports = router;
