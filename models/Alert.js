var db = require('./db')

var Alert = db.model('Alert',{
				name : {
									type:String,
									required:true
							 },
				curr_pair : {
												type:String,
												required:true
										},
				filterBy:[
					{
						By : {
										type:String,
										required:true,
										enum:[ 'last', 'lowestAsk', 'highestBid', 'percentChange', 'baseVolume', 'quoteVolume',  '24hrHigh', '24hrLow']
								 },
				  	limit : {type:String,required:true}
					}
				],
})

module.exports =  Alert
