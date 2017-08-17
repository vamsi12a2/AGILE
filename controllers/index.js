var express = require('express')
var router = express.Router()

router.use('/user', require('./user'))
router.use(express.static(__dirname + '/../views'))

router.get("/", function(req, res, err) {
  res.render("index.html")
});



module.exports = router;