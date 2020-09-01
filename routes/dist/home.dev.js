"use strict";

var express = require("express");

var Router = express.Router();

var pointAddition = require("../utils/pointCalculation");

var products = require("../utils/products");

Router.get("/", function (req, res) {
  console.log(products);
  res.render("homePage", {
    products: products
  });
});
Router.post("/", function (req, res) {
  //Destructuring the body object
  var _req$body = req.body,
      id = _req$body.id,
      name = _req$body.name,
      price = _req$body.price,
      src = _req$body.src,
      rating = _req$body.rating; //Initialisation

  var product = {};
  product.id = id;
  product.name = name;
  product.price = price;
  product.imgSrc = src;
  product.rating = rating; //Push

  products.push(product); //For testing

  console.log(products);
  res.status(200).json({
    success: "Product posted successfully !"
  });
});
module.exports = Router;