const exp = require("constants");
const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/aboutme", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/invalidpage.html`);
});

app.listen(5000);
