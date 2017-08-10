'use strict';

var http=require('http');
var express = require('express')
var config = require('./config')
var app=express()


var server = app.listen(config.port,function() {
                 
  console.log("Server is up and listening...")
});


app.use("/",function(req,res){
  res.write("hello");
  res.end();
});
