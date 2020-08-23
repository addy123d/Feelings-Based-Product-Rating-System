"use strict";

var express = require("express");

var Router = express.Router();

var natural = require("natural");

var wordTokeniser = require("../utils/wordtokeniser");

var normaliser = require("../utils/normalisation");

var corrector = require("../utils/spellCorrector");

var removeStopwords = require("../utils/stopwords");

var getPoints = require("../utils/getPoints");

Router.post("/", function (req, res, next) {
  var review = req.body.review; //Word Normalisation

  var normalisedText = normaliser(review); //Word Tokenisation

  var tokenizedText = wordTokeniser(normalisedText); //Spelling Correction

  var correctedText = corrector(tokenizedText); //Stopwords Removal

  var filteredReview = removeStopwords(correctedText); //Get Points Based on Hidden feelings inside the user Comment 

  var resultantPoints = getPoints(filteredReview);
  res.status(200).json({
    points: "".concat(resultantPoints)
  });
});
module.exports = Router;