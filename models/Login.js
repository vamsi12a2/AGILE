var db  = require('./db')

var Login =  db.model('Login',{
								username : {
												    	type:String,
															required:true
													 },
								password : {
															type:String,
															required:true
													 },
										Alert:{
					 												name : {
					 																	type:String,
					 																	required:false
					 															 },
					 												curr_pair : {
					 																				type:String,
					 																				required:false
					 																		},
					 												threshold:{
																		type: String,
																		required:false
																	},
																	required:false
					 								}
})

module.exports = Login
