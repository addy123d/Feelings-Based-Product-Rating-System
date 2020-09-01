"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var ejs = require("ejs");

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); //View Engine

app.set("view engine", "ejs");
app.use(express["static"](__dirname + "/public")); //Bring Routes

var review = require("./routes/review");

var home = require("./routes/home");

var register = require("./routes/register"); //Routes


app.use("/review", review);
app.use("/home", home);
app.use("/register", register);
app.use("/", register);
module.exports = app;