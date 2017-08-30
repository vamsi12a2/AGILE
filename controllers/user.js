var express = require('express')
var router = express.Router()
var path = require('path')
var Login = require('../models/Login')  

router.get("/", function(req, res, err) {
  console.log("called / using GET")

  res.render("index.html")
});

router.post('/login', function(req, res, err) {

 console.log('login success')
 res.redirect("/user")

});


router.get("/user", function(req, res, err) {
  console.log("called /user using GET")
  res.render("user.html")
});

router.get("/temp", function(req, res, err) {
  console.log("called /temp using GET")
  res.render("temp.html")
});
module.exports = router;