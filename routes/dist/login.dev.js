"use strict";

var express = require("express");

var Router = express.Router();

var _require = require("../utils/registration"),
    login = _require.login,
    registration = _require.registration;

Router.get("/", function (req, res, next) {
  res.render("login");
});
Router.post("/", function (req, res, next) {
  // Destructuring
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;
  var result = login(email, password);
  res.status(200).json(result);
});
module.exports = Router;