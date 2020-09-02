const express = require("express");
const Router = express.Router();
const pointAddition = require("../utils/pointCalculation");
const products = require("../utils/products");


Router.get("/",(req,res)=>{
    console.log(req.session);
    res.render("homePage",{
        products : products
    });
})


Router.post("/",(req,res)=>{
    //Destructuring the body object
    const { id, name, price, src,rating} = req.body;

    //Initialisation
    const product = {};
    product.id = id;
    product.name = name;
    product.price = price;
    product.imgSrc = src;
    product.rating = rating;

    //Push
    products.push(product);

    //For testing
    console.log(products);

    res.status(200).json({
        success : "Product posted successfully !"
    })
})




module.exports = Router;