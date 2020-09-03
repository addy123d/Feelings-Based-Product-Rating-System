const express = require("express");
const Router = express.Router();
const pointAddition = require("../utils/pointCalculation");
const products = require("../utils/products");


Router.get("/",(req,res)=>{
    var status = false;
    if(req.session.email)
         status = true;

    res.render("homePage",{
        products : products,
        status : status
    });
})


Router.post("/",(req,res)=>{
    console.log(req.body);
    const comments = [];
    //Destructuring the body object
    const { name, price, src } = req.body;

    //Id Generation
    const id = Math.floor(Math.random()*9000000000)+10000000000;
    const finalId = id + "";


    // Get index of product with same name
    const getIndex = products.findIndex(user => user.name === name);
    console.log(getIndex);

    if(getIndex >= 0)
    res.status(200).json("Product with same name exists !");
    else{
     //Initialisation
    const product = {};
    product.id = finalId;
    product.name = name;
    product.price = price;
    product.imgSrc = src;
    product.rating = 5;
    product.comments = comments;

    //Push
    products.push(product);

    //For testing
    console.log(products);

    res.status(200).json("Posted Successfully !");
}
})




module.exports = Router;