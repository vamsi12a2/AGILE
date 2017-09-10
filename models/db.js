var mongo = require('mongoose')
var config = require('../config')


mongo.connect(config.MONGO_URL,function(err){
	if(err){
		console.log(err)
		return err
	}
	console.log(mongo.connection.readyState)
	console.log("MongoDB Conencted..")
})




module.exports = mongo;
