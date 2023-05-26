const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const routes = express.Router();

// app.use(reqFilter);

routes.use(reqFilter);
app.get("", (req, res) => {
  res.send("Welcome to home page");
});

routes.get("/users", (req, res) => {
  res.send("Welcome to users page");
});

routes.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

routes.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});

app.use("/", routes);

app.listen(5000);
