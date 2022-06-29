const pool = require("./lib/database");
const express = require("express");
const app = express();
const port = 1000;

app.use(express.json());

let users = [
  { id: 122323, username: "Laswell" },
  { id: 223133, username: "Ghost" },
  { id: 332120, username: "Price" },
  { id: 332353, username: "Heisenberg" },
];
//
//
//
//
//
app.get("/noodles", async (req, res) => {
  try {
    const connection = pool.promise();
    const sqlGetNoodles = "SELECT * FROM product;";

    const [noodlesResult] = await connection.query(sqlGetNoodles);

    res.send({
      status: "Success",
      message: "Noodles test",
      data: {
        result: noodlesResult,
      },
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});
//
//
//
//
//
app.get("/", (req, res) => {
  res.send("API JALAN KOK");
});
//
//
//
//
//
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.send({
    status: "Success",
    message: "Success create new user",
  });
});
//
//
//
//
//
app.get("/users", (req, res) => {
  const { username } = req.query;

  let data = [...users];

  if (username) {
    const filteredUsers = data.filter((user) => user.username == username);
    data = [...filteredUsers];
  }

  res.send({
    status: "Success",
    message: "User list",
    data: {
      result: users,
    },
  });
});
//
//
//
//
//
app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const filteredUser = users.filter((user) => user.id == parseInt(id));

  res.send({
    status: "Success",
    message: "User by id",
    data: {
      result: filteredUser,
    },
  });
});
//
//
//
//
//
app.delete("/users", (req, res) => {
  const { id } = req.body;

  let deletedUser;
  users = users.filter((user) => {
    if (user.id == id) {
      deletedUser = user.username;
    }
    return user.id != parseInt(id);
  });

  res.send({
    status: "Success",
    message: `Delete user ${deletedUser}`,
    users,
  });
});
//
//
//
//
//
app.patch("/users", (req, res) => {
  const userOverwrite = req.body;
  users = [userOverwrite];

  res.send({
    status: "Success",
    message: "Users overwrite",
  });
});
//
//
//
//
//
//
app.listen(port, (error) => {
  if (error) return console.log({ err: error.message });
  console.log(`API berhasil running di port ${port}`);
});
