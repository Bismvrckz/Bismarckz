const express = require("express");
const { fieldIsEmpty } = require("../../helpers");
const router = express.Router();
const pool = require("../../lib/database");
const validator = require("email-validator");
const { hash } = require("../../lib/bcryptjs");

const userRegister = async (req, res) => {
  try {
    const { user_id, userName, email, password } = req.body.postFormat;
    const connection = pool.promise();
    const sqlArizonnaRegisterUser = `INSERT into USERS  (USER_ID, USERNAME, EMAIL, USER_PASSWORD) values (${user_id},'${userName}','${email}','${password}');`;

    const [registerStatus] = await connection.query(sqlArizonnaRegisterUser);

    res.send({
      status: "Success",
      message: "Success resgister user",
      data: {
        result: registerStatus,
      },
    });
  } catch (error) {
    res.send({ error });
    console.log({ error });
  }
};

const registerUser = async (req, res, next) => {
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
          message: "Username telah dipakai",
          detail: {
            databaseUsername: getUserResult[0],
            clientUsername: username,
          },
        };
      } else if (getUserResult[0].email == email) {
        throw {
          code: 400,
          message: "Email telah dipakai",
          detail: { databaseEmail: getUserResult[0], clientEmail: email },
        };
      }
    }

    const date = new Date();
    const userIdMaker = date.getTime();

    const encryptedPassword = hash(password);

    console.log({ encryptedPassword });

    const sqlCreateNewUser = `INSERT into USERS  (USER_ID, USERNAME, EMAIL, USER_PASSWORD) 
                              values (${userIdMaker},'${username}','${email}','${encryptedPassword}')`;

    const [createNewUserResult] = await connection.query(sqlCreateNewUser);

    const token = "";

    res.send({
      status: "Success",
      message: "Success resgister user",
      data: {
        result: "success",
      },
    });
  } catch (error) {
    next(error);
  }
};

router.post("/register", registerUser);

module.exports = router;
