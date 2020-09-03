const express = require("express");
const Router = express.Router();


Router.get("/",(req,res)=>{
    req.session.destroy(function(err) {
        // cannot access session here
        if(err)
        res.redirect("/home");
        else
        res.redirect("/register");
      })
})



module.exports = Router;