const express = require("express");
const Router = express.Router();
const natural = require("natural");
const products = require("../utils/products");
const pointAddition = require("../utils/pointCalculation");
const wordTokeniser = require("../utils/wordtokeniser");
const normaliser = require("../utils/normalisation");
const corrector = require("../utils/spellCorrector");
const removeStopwords = require("../utils/stopwords");
const getPoints = require("../utils/getPoints");



//Feelings Analysis
Router.post("/",(req,res,next)=>{
    const { review } = req.body;
    console.log(review);

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
    console.log(resultantPoints);

    res.status(200).json({ resultantPoints });
   
})



//On review page
Router.get("/:id",(req,res,next)=>{
    const id = req.params.id;
    
    //Find product with given id - 1.findIndex  2.Search in that array on the basis of index
    const productIndex = products.findIndex((product)=>product.id == id);
    
    //Find the product in products Array;
    const requiredProduct = products[productIndex]; 

    res.status(200).render("reviewPage",{
        product : requiredProduct,
        user : req.session.email
    })

})



//Post Comments
Router.post("/:id",(req,res,next)=>{
    console.log("hit");
    console.log(req.session);
    const {comment} = req.body;
    const id = req.params.id;

    // Comment Object
    const commentObject = {};
    commentObject.username = req.session.email;
    commentObject.comment = comment;

    //Grab index of product from storage of products using findIndex
    const index = products.findIndex((product)=>product.id === id);

    //Push Comment
    products[index].comments.push(commentObject);

    // Feelings Points
    //Word Normalisation
    const normalisedText = normaliser(comment);

    //Word Tokenisation
    const tokenizedText = wordTokeniser(normalisedText);
    
    //Spelling Correction
    const correctedText = corrector(tokenizedText);
    
    //Stopwords Removal
    const filteredReview = removeStopwords(correctedText);
    
    //Get Points Based on Hidden feelings inside the user Comment 
    const resultantPoints = getPoints(filteredReview);
    console.log(resultantPoints);

    //Updation of rating points
    products[index].rating = pointAddition(parseFloat(resultantPoints) , products[index].rating);

    console.log(products);
    res.status(200).json({
        message : "Updated !"
    })
})


module.exports = Router;