"use strict";

var express = require("express");

var Router = express.Router();
Router.get("/", function (req, res) {
  req.session.destroy(function (err) {
    // cannot access session here
    if (err) res.redirect("/home");else res.redirect("/register");
  });
});
module.exports = Router;