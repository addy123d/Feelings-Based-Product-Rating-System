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

app.get("/", function (req, res) {
  res.render("reviewPage");
});

var review = require("./routes/review"); //Routes


app.use("/review", review);
module.exports = app;