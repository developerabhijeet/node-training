// const express =require('express')
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";
// import http from "http";
// import compression from "compression";
// import cors from "cors";

// const app = express();

// app.use(
//   cors({
//     credentials: true,
//   })
// );

// app.use(compression());
// app.use(cookieParser());
// app.use(bodyParser.json());

// const server = http.createServer(app);


// server.listen(3000, () => {
//     console.log("server is running on port 3000")
// })

var express = require('express');  
var app = express();  
app.get('/', function (req:any, res:any) {  
  res.send('Welcome to nodejs session!');  
});  
var server = app.listen(3000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  

