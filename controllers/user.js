var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var path = require('path')
var jwt = require('jwt-simple')
var Login = require('../models/Login')
var config = require("../config")

router.get("/", function(req, res, err) {
  console.log("called / using GET")

  res.render("index.html")
});

res.get("/user",function(req,res,err){
  
  var username = req.body.username
  Login.findOne({username:username}).select('password').
  exec(function(err,user){
    if(err){
      return next(err)
    }
    if(!user){
      res.sendStatus(401);
    }
    bcrypt.compare(req.body.password,user.password,function(err,valid){
      if(err){
        return next(err)
      }
      if(!vaild){
        return res.sendStatus(401);
      }
      var token = jwt.encode({username:username},config.secret)
      
    })
  })
  res.headers['x-auth'] = token
  res.json(username)
  
})

module.exports = router