'use strict';

var http=require('http');
var express = require('express')
var body_par = require('body-parser')
var cookie_par = require('cookie-parser')
var config = require('./config')
var app=express()
<<<<<<< HEAD
app.use(require('./controllers'))
var server = app.listen(config.port,function() {
=======
app.use(body_par.json())
app.use(cookie_par())
app.use(require('./controllers'))
var server = app.listen(config.port,function() 
{
>>>>>>> exp
                 
  console.log("Server is up and listening...")
});


<<<<<<< HEAD
=======
/*app.use("/",function(req,res){
  res.write("hello");
  res.end();
});*/
>>>>>>> exp
