const express = require("express");
const app = express();
const port = 1000;

app.get("/users", (req, res) => {
  res.send({
    currentStatus: "Success",
    data: ["Hendrickson", "Laswell", "Ghost"],
  });
});

app.listen(port, (error) => {
  if (error) return console.log({ err: error.message });
  console.log(`API berhasil running di port ${port}`);
});
