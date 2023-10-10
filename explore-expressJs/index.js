const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from first express js");
});

app.get("/data", (req, res) => {
  res.send("Exploring the express js");
});

app.listen(port, () => {
  console.log(`My first server is running on port: ${port}`);
});
