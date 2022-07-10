const bearerToken = require("express-bearer-token");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 2000;

// ROUTERS
const usersRouter = require("./routers/user");

// APP.USE
app.use(express.json());
app.use(bearerToken());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Akses API aman 👍");
});

app.use("/users", usersRouter);

app.use((error, req, res, next) => {
  console.log({ error });

  const errorFormat = {
    status: "Error",
    message: error.message,
    detail: error.detail,
  };

  const httpCode = typeof error.code == "number" ? error.code : 500;

  res.status(httpCode).send(errorFormat);
});

app.listen(port, (error) => {
  if (error) return console.log({ err: error.message });
  console.log(
    `API berhasil running di port ${port} 
Lancar jaya mazseh (^////^)' `
  );
});
