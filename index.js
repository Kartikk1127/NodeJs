const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
  const user = {
    name: "Kartikey",
    email: "kartikey@gmail.com",
    city: "noida",
  };
  res.render("profile", { user });
});

app.listen(5000);
