const express = require("express");
const Router = express.Router();
const natural = require("natural");
const products = require("../utils/products");
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

Router.get("/:id",(req,res,next)=>{
    const id = req.params.id;
    
    //Find product with given id - 1.findIndex  2.Search in that array on the basis of index
    const productIndex = products.findIndex((product)=>product.id == id);
    
    //Find the product in products Array;
    const requiredProduct = products[productIndex]; 

    res.status(200).render("reviewPage",{
        product : requiredProduct
    })

})



module.exports = Router;