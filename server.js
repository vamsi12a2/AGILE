'use strict';

var https = require('https');
var parser =require('body-parser')
var Alert = require('./models/Alert')
var express = require('express')
var config = require('./config')
var path = require('path')
var request =require('request')
var app = express()
var pol = require("poloniex-api")
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + "/public/views"))
app.use(require('./controllers'))
app.use(express.static(path.join(__dirname + "/public")))

var server = app.listen(config.port, function() {
  console.log("Server is up and listening...")
app.use(parser.json())

setInterval(checkData,10000);
function checkData()
{
            var alerts="";
            Alert.find({},function (err, alts) {
                  if(err)
                  {
                    console.log(err)
                  }

                    alerts = alts;
                  for(let alert of alerts){
                    var dat=""
                    https.get('https://bittrex.com/api/v1.1/public/getticker?market='+alert.marketName,function(res){

                        res.on("data",function(data){
                          dat =data;
                        })

                        res.on("end",function(){


                          dat = JSON.parse(dat).result;
                          console.log(alert.marketName+":"+dat.Last+":"+alert.threshold)
                          if( dat.Last >= alert.threshold)
                          {
                            console.log("Into twilio..")
                            var client = require('twilio')("ACa54906cce164c4b39e405fd09becc5c9", "89e3addc425c614d1b045d798f05fac0");
                            client.api.messages
                            .create({
                              body: "hello:"+alert.marketName+":"+alert.threshold+":"+dat.Last,
                              to: alert.phoneNumber,
                              from: "+18179346305",
                            }).then(function(data) {
                              console.log('Message sent successfully');
                              Alert.findOne({marketName:alert.marketName,threshold:alert.threshold,phoneNumber:alert.phoneNumber}).remove(function(err){
                                  if(err)
                                  {
                                    console.log(err)
                                  }
                                console.log("Alert deleted")
                              })
                            }).catch(function(err) {
                              console.error('Could not send message');
                              console.error(err);
                            });
                          }
                        })

                    })

                  }
                  console.log("exiting for loop...")
                });
              console.log("exiting function..")
  }
  /*alerts.forEach(function(alert){

  var dat=""
  https.get('https://bittrex.com/api/v1.1/public/getticker?market='+alert.marketName,function(res){

      res.on("data",function(data){
        dat+=data;
      })

      res.on("end",function(){

        dat = JSON.parse(dat)
        console.log(dat)
      })

  })

})*/
})
