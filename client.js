var http=require('http');
var options={
  host:"0.0.0.0",
  port:"8000",
  method:"get"
};

var clt = http.request(options,function(req,res){
  console.log("connect");
});