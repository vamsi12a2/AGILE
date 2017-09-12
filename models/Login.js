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
										Alert:[{
					 												name : {
					 																	type:String,
					 																	required:false
					 															 },
					 												curr_pair : {
					 																				type:String,
					 																				required:false
					 																		},
					 												filterBy:
					 													{
					 														By : {
					 																		type:String,
					 																		required:false,
					 																		enum:[ 'last', 'lowestAsk', 'highestBid', 'percentChange', 'baseVolume', 'quoteVolume',  '24hrHigh', '24hrLow']
					 																 },
					 												  	limit : {type:String,required:false}
					 													}
					 												,
																	required:false
					 								}]
})

module.exports = Login
