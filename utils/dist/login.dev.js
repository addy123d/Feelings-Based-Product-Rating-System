"use strict";

var express = require("express");

var Router = express.Router();

var registration = require("../utils/registration");

Router.get("/", function (req, res, next) {
  res.render("login");
});
Router.post("/", function (req, res, next) {
  console.log(req.body);
});
module.exports = Router;