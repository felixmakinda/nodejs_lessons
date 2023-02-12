const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Hey! Things are working.");
  res.render("index", { text: "Felix Makinda!" });
});

app.listen(8081);
