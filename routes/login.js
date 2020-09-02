const express = require("express");
const Router = express.Router();
const {
    login,
    registration
 } = require("../utils/registration");

 
Router.get("/",(req,res,next)=>{
    res.render("login")
})

Router.post("/",(req,res,next)=>{
    // Destructuring
    const {email,password} = req.body;

    const result = login(email,password);
    
    res.status(200).json(result);
})


module.exports = Router;