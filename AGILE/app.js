var http=require('http');


function callback(req,res){

  console.log("User made request for url:"+req.url);
  res.writeHeader(200,"Context-Type:text/plain");
  res.write("hello client");
  res.end();
}
//http.createServer(callback).listen(8888);
console.log("Server is listening on 8888......")
