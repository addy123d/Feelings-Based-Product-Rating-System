const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//View Engine
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

//Bring Routes
const review = require("./routes/review");
const home = require("./routes/home");
const register = require("./routes/register");



//Routes
app.use("/review", review);
app.use("/home", home);
app.use("/register", register);
app.use("/",register);


module.exports = app;