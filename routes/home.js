const express = require("express");
const Router = express.Router();
const pointAddition = require("../utils/pointCalculation");
const products = require("../utils/products");


Router.get("/",(req,res)=>{
    console.log(products);
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


//Update
Router.put("/:id",(req,res,next)=>{
    const id = req.params.id;
    const { rating } = req.body;

    //Grab index of product from storage of products using findIndex
    const index = products.findIndex((product)=>product.id === id);

    //Updation of rating points
    products[index].rating = pointAddition(parseFloat(rating) , products[index].rating);

    console.log(products);
    res.status(200).json({
        message : "Updated !"
    })
})

module.exports = Router;