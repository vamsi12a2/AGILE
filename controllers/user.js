var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var path = require('path')
var Login = require('../models/Login')
router.get("/", function(req, res, err) {
  console.log("called / using GET")

  res.render("index.html")
});

router.post('/login', function(req, res, err) {

  console.log('login success')
  res.json("true");

});


router.get('/login', function(req, res, err) {

  console.log('login page loaded')
  res.render("login.html")

});

router.get('/register', function(req, res, err) {

  console.log('register page loaded')
  res.render("register.html")
});

router.post('/register', function(req, res, err) {
 console.log("username:"+req.body.username)
 var pass =""
 bcrypt.hash(req.body.password,12,function(err,hash){
    if(err){
      console.log(err)
    }
  console.log("password:"+pass)
  var user=new Login({username:req.body.username,password:pass})
  user.save(function(err){
    console.log("save")
    if(err){
       return next(err)
     }
  res.json({status:"true",user:user.username})
  })
  })
});

router.get("/user", function(req, res, err) {
  console.log("called /user using GET")
  res.render("user.html")
});

module.exports = router