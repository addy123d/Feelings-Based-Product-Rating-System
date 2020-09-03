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

  if (result.email) {
    var _email = result.email,
        _password = result.password;
    req.session.email = _email;
    req.session.password = _password;
    console.log(req.session);
    res.status(200).json(result);
  } else res.status(200).json(result);
});
module.exports = Router;