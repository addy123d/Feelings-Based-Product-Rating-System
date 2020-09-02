const express = require("express");
const Router = express.Router();
const {
    login,
    registration
 } = require("../utils/registration");


Router.get("/",(req,res,next)=>{
    res.render("register")
})

Router.post("/",(req,res,next)=>{
    console.log(req.body);
    const { email,password} = req.body;

    const registeredUsers = registration(email,password);

    console.log(registeredUsers[0]);
        if(registeredUsers[0].email){
            const { email, password } = registeredUsers[0];
            req.session.email = email;
            req.session.password = password;
            console.log(req.session);
            res.status(200).json(registeredUsers[0]);
        }else
            res.status(200).json(registeredUsers);
            
})


module.exports = Router;