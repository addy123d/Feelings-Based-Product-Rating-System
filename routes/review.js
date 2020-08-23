const express = require("express");
const Router = express.Router();
const natural = require("natural");
const wordTokeniser = require("../utils/wordtokeniser");
const normaliser = require("../utils/normalisation");
const corrector = require("../utils/spellCorrector");
const removeStopwords = require("../utils/stopwords");
const getPoints = require("../utils/getPoints");




Router.post("/",(req,res,next)=>{
    const { review } = req.body;

    //Word Normalisation
    const normalisedText = normaliser(review);

    //Word Tokenisation
    const tokenizedText = wordTokeniser(normalisedText);

    //Spelling Correction
    const correctedText = corrector(tokenizedText);

    //Stopwords Removal
    const filteredReview = removeStopwords(correctedText);

    //Get Points Based on Hidden feelings inside the user Comment 
    const resultantPoints = getPoints(filteredReview);

    res.status(200).json({
        points : `${resultantPoints}`
    })
   
})



module.exports = Router;