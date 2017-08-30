var mongo = require('mongoose')
var config = require('../config')


mongo.connect(config.MONGO_URL,function(){
		console.log("MongoDB Conencted..")
})




module.exports = mongo;