const express = require("express");
const router = express.Router();
const pool = require("../../../lib/database");

const getUser = async (req, res) => {
  try {
    const { userName, email } = req.query;
    const connection = pool.promise();
    let arizonnaGetUser;
    switch (userName) {
      case undefined:
        arizonnaGetUser = `SELECT * FROM users WHERE email = '${email}';`;

        break;

      default:
        arizonnaGetUser = `SELECT * FROM users WHERE username = '${userName}';`;
        break;
    }

    const [getUserResult] = await connection.query(arizonnaGetUser);

    res.send({
      result: getUserResult,
    });
  } catch (error) {
    res.send({ error });
  }
};

router.get("/", getUser);

module.exports = router;
