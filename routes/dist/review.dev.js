"use strict";

var express = require("express");

var Router = express.Router();

var natural = require("natural");

var products = require("../utils/products");

var pointAddition = require("../utils/pointCalculation");

var wordTokeniser = require("../utils/wordtokeniser");

var normaliser = require("../utils/normalisation");

var corrector = require("../utils/spellCorrector");

var removeStopwords = require("../utils/stopwords");

var getPoints = require("../utils/getPoints"); //Feelings Analysis


Router.post("/", function (req, res, next) {
  var review = req.body.review;
  console.log(review); //Word Normalisation

  var normalisedText = normaliser(review); //Word Tokenisation

  var tokenizedText = wordTokeniser(normalisedText); //Spelling Correction

  var correctedText = corrector(tokenizedText); //Stopwords Removal

  var filteredReview = removeStopwords(correctedText); //Get Points Based on Hidden feelings inside the user Comment 

  var resultantPoints = getPoints(filteredReview);
  console.log(resultantPoints);
  res.status(200).json({
    resultantPoints: resultantPoints
  });
}); //On review page

Router.get("/:id", function (req, res, next) {
  var id = req.params.id; //Find product with given id - 1.findIndex  2.Search in that array on the basis of index

  var productIndex = products.findIndex(function (product) {
    return product.id == id;
  }); //Find the product in products Array;

  var requiredProduct = products[productIndex];
  res.status(200).render("reviewPage", {
    product: requiredProduct,
    user: req.session.email
  });
}); //Post Comments

Router.post("/:id", function (req, res, next) {
  console.log("hit");
  console.log(req.session);
  var comment = req.body.comment;
  var id = req.params.id; // Comment Object

  var commentObject = {};
  commentObject.username = req.session.email;
  commentObject.comment = comment; //Grab index of product from storage of products using findIndex

  var index = products.findIndex(function (product) {
    return product.id === id;
  }); //Push Comment

  products[index].comments.push(commentObject); // Feelings Points
  //Word Normalisation

  var normalisedText = normaliser(comment); //Word Tokenisation

  var tokenizedText = wordTokeniser(normalisedText); //Spelling Correction

  var correctedText = corrector(tokenizedText); //Stopwords Removal

  var filteredReview = removeStopwords(correctedText); //Get Points Based on Hidden feelings inside the user Comment 

  var resultantPoints = getPoints(filteredReview);
  console.log(resultantPoints); //Updation of rating points

  products[index].rating = pointAddition(parseFloat(resultantPoints), products[index].rating);
  console.log(products);
  res.status(200).json({
    message: "Updated !"
  });
});
module.exports = Router;