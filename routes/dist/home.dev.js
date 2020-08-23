"use strict";

var express = require("express");

var Router = express.Router();
var products = [{
  id: "123",
  name: "Puma",
  price: "12.89",
  imgSrc: "/images/shoe.jpg",
  rating: 10
}, {
  id: "321",
  name: "Unisex Tshirt",
  price: "12.89",
  imgSrc: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=300",
  rating: 10
}, {
  id: "341",
  name: "Iphone X Pro",
  price: "12.89",
  imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  rating: 10
}];
Router.get("/", function (req, res) {
  console.log(products);
  res.render("reviewPage", {
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
}); //Update

Router.put("/:id", function (req, res, next) {
  var id = req.params.id;
  var rating = req.body.rating; //Grab index of product from storage of products using findIndex

  var index = products.findIndex(function (product) {
    return product.id === id;
  }); //Updation of rating points

  products[index].rating = parseInt(rating);
  console.log(products);
  res.status(200).json({
    message: "Updated !"
  });
});
module.exports = Router;