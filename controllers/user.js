var express = require('express')
var router = express.Router()
router.use(express.static(__dirname + '/../views'))
router.get('/',function(req,res,err)
{
  res.render("user.html")
  console.log("called /user using GET")
});

module.exports  = router;