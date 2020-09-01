const express = require("express");
const Router = express.Router();


Router.get("/",(req,res,next)=>{
    res.render("login",{
        status : ""
    })
})

Router.get("/login",(req,res,next)=>{
    res.render("login",{
        status: "Login"
    })
})


Router.post("/",(req,res,next)=>{
    console.log(req.body);
})


module.exports = Router;