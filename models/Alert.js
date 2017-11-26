var db = require('./db')

var Alert = db.model('Alert',{
				marketName : {
									type:String,
									required:true
							 },
				threshold: {
					type:String,
					required : true
				},
				phoneNumber:{
					type:String,
					required: true
				}
})

module.exports =  Alert
