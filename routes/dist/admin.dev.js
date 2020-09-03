"use strict";

var express = require("express");

var Router = express.Router();
Router.get("/", function (req, res) {
  res.render("admin");
});
module.exports = Router;