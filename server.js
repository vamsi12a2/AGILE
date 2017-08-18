'use strict';

var http=require('http');
var express = require('express')
var config = require('./config')
var path = require('path')
var app=express()

app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs')
app.set('views',path.join(__dirname+"/public/views"))
app.use(require('./controllers'))
app.use(express.static(path.join(__dirname+"/public")))

var server = app.listen(config.port,function() {           
  console.log("Server is up and listening...")
});


