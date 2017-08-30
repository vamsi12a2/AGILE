var db  = require('./db')

var Login =  db.model('Login',{
								username : {
												    	type:String,
															required:true
													 },
								password : {
															type:String,
															required:true
													 }
})

module.exports = Login