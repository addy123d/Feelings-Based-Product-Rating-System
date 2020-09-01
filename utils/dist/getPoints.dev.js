"use strict";

var natural = require("natural");

function getPoints(sentence) {
  console.log(sentence);
  var SentimentAnalyzer = natural.SentimentAnalyzer,
      PorterStemmer = natural.PorterStemmer;
  var analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
  var analysis = analyzer.getSentiment(sentence);
  return analysis;
}

module.exports = getPoints;