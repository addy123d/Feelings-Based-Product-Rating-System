"use strict";

var express = require("express");

var Router = express.Router();
Router.get("/", function (req, res, next) {
  res.render("login", {
    status: ""
  });
});
Router.get("/login", function (req, res, next) {
  res.render("login", {
    status: "Login"
  });
});
Router.post("/", function (req, res, next) {
  console.log(req.body);
});
module.exports = Router;