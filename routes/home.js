const express = require("express");
const Router = express.Router();
const pointAddition = require("../utils/pointCalculation");

const products = [{
    id : "123",
    name : "Puma",
    price : "12.89",
    imgSrc : "/images/shoe.jpg",
    rating : 10
},
{
    id : "321",
    name : "Unisex Tshirt",
    price : "12.89",
    imgSrc : "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=300",
    rating : 10 
},
{
    id : "341",
    name : "Iphone X Pro",
    price : "12.89",
    imgSrc : "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    rating : 10 
}]


Router.get("/",(req,res)=>{
    console.log(products);
    res.render("reviewPage",{
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