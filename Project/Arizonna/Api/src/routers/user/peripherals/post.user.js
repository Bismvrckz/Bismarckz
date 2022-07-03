const express = require("express");
const router = express.Router();
const pool = require("../../../lib/database");

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

router.post("/", userRegister);

module.exports = router;
