"use strict";

var express = require("express");

var Router = express.Router();

var pointAddition = require("../utils/pointCalculation");

var products = require("../utils/products");

Router.get("/", function (req, res) {
  var status = false;
  if (req.session.email) status = true;
  res.render("homePage", {
    products: products,
    status: status
  });
});
Router.post("/", function (req, res) {
  console.log(req.body);
  var comments = []; //Destructuring the body object

  var _req$body = req.body,
      name = _req$body.name,
      price = _req$body.price,
      src = _req$body.src; //Id Generation

  var id = Math.floor(Math.random() * 9000000000) + 10000000000;
  var finalId = id + ""; // Get index of product with same name

  var getIndex = products.findIndex(function (user) {
    return user.name === name;
  });
  console.log(getIndex);
  if (getIndex >= 0) res.status(200).json("Product with same name exists !");else {
    //Initialisation
    var product = {};
    product.id = finalId;
    product.name = name;
    product.price = price;
    product.imgSrc = src;
    product.rating = 5;
    product.comments = comments; //Push

    products.push(product); //For testing

    console.log(products);
    res.status(200).json("Posted Successfully !");
  }
});
module.exports = Router;