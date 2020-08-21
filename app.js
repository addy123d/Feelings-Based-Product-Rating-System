const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//Bring Routes
const review = require("./routes/review");

//Routes
app.use("/review", review);


module.exports = app;