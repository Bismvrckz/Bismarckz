const pool = require("./lib/database");
const express = require("express");
const app = express();
const port = 2000;

app.use(express.json());

const userRouter = require("./routers/user");

app.get("/", (req, res) => {
  res.send("Akses api Berhasil 😎, tapi belum masuk akses dalam 👌");
});

app.use("/users", userRouter);

app.listen(port, (error) => {
  if (error) return console.log({ err: error.message });
  console.log(`API berhasil running di port ${port}`);
});
