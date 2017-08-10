'use strict';

var http=require('http');
var express = require('express')
var app=express()
var server = http.createServer(app).listen(8000,'0.0.0.0');
console.log("server running");

app.use("/",function(req,res){
  res.write("hello");
  res.end();
});
