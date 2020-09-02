const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session");
const five_Hours = 1080000;

// SESSION CONFIGURATION
const sess = {
  name: "detailInfo",
  resave: false,
  saveUninitialized: true,
  secret: "mySecret",
  cookie: {}
}

const app = express();

if (app.get('env') === "production") {
    sess.cookie.secure = false;
    sess.cookie.maxAge = parseInt(five_Hours);
    sess.cookie.sameSite = true;
  }
app.use(session(sess));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// Middlewares based upon sessions
//FOR TABLES
const redirectLogin = (req, res, next) => {
  if (!req.session.email)
    res.redirect("/register");
  else
    next();
}

const redirectHome = (req, res, next) => {
  if(req.session.email)
    res.redirect("/home");
  else
    next();
}


//View Engine
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

//Bring Routes
const review = require("./routes/review");
const home = require("./routes/home");
const register = require("./routes/register");
const login = require("./routes/login");



//Routes
app.use("/review", review);
app.use("/home",redirectLogin,home);
app.use("/register",redirectHome, register);
app.use("/login",redirectHome, login);


module.exports = app;