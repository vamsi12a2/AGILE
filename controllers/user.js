var express = require('express')
var router = express.Router()
var path = require('path')

router.get("/", function(req, res, err) {
  console.log("called / using GET")
 
  res.render("index.html")
});

router.get("/user",function(req,res,err)
{
   console.log("called /user using GET")
  res.render("user.html")
});

module.exports  = router;