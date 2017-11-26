var express = require('express')
var router = express.Router()
var parser =require("body-parser")

router.use(parser.json())
router.use('/', require('./user'))
module.exports = router;
