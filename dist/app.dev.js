"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var ejs = require("ejs");

var session = require("express-session");

var five_Hours = 1080000; // SESSION CONFIGURATION

var sess = {
  name: "detailInfo",
  resave: false,
  saveUninitialized: true,
  secret: "mySecret",
  cookie: {}
};
var app = express();

if (app.get('env') === "production") {
  sess.cookie.secure = false;
  sess.cookie.maxAge = parseInt(five_Hours);
  sess.cookie.sameSite = true;
}

app.use(session(sess));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); // Middlewares based upon sessions
//FOR TABLES

var redirectLogin = function redirectLogin(req, res, next) {
  if (!req.session.email) res.redirect("/register");else next();
};

var redirectHome = function redirectHome(req, res, next) {
  if (req.session.email) res.redirect("/home");else next();
}; //View Engine


app.set("view engine", "ejs");
app.use(express["static"](__dirname + "/public")); //Bring Routes

var review = require("./routes/review");

var home = require("./routes/home");

var register = require("./routes/register");

var login = require("./routes/login"); //Routes


app.use("/review", review);
app.use("/home", redirectLogin, home);
app.use("/register", redirectHome, register);
app.use("/login", redirectHome, login);
module.exports = app;