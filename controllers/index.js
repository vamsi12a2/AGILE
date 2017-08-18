var express = require('express')
var router = express.Router()

router.use('/pages', require('./user'))
module.exports = router;