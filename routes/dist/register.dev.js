"use strict";

var express = require("express");

var Router = express.Router();

var _require = require("../utils/registration"),
    login = _require.login,
    registration = _require.registration;

Router.get("/", function (req, res, next) {
  res.render("register");
});
Router.post("/", function (req, res, next) {
  console.log(req.body);
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;
  var registeredUsers = registration(email, password);
  console.log(registeredUsers[0]);

  if (registeredUsers[0].email) {
    var _registeredUsers$ = registeredUsers[0],
        _email = _registeredUsers$.email,
        _password = _registeredUsers$.password;
    req.session.email = _email;
    req.session.password = _password;
    console.log(req.session);
    res.status(200).json(registeredUsers[0]);
  } else res.status(200).json(registeredUsers);
});
module.exports = Router;