const express = require("express");
const connectToMongo = require("./db");
connectToMongo();

const app = express();
const port = 5000;

app.get("/get", (req, res) => {
  res.send("Hello, this is test1 response!");
  console.log(req, res);
});

app.listen(port, () => {
  console.log("connected!! with port > :", port);
});
