var express = require('express')
var router = express.Router()

router.get('/',function(req,res,err)
{
  
  console.log("called /user using GET")
});

module.exports  = router;