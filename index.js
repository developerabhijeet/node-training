// var http = require("http");
// const hostName = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.write("Hello World!");
//   res.end();
// });
// server.listen(port, hostName, () => {
//   console.log(`server start at port ${port}`);
// });

//Create server with express 

const express = require('express')
const baseUrl =  "http://localhost:"
const app = express()
const port = 3000;
app.get("/",(req,res) => {
    res.send("Hello express call here")
})
app.get("/newurl",(req,res)=>{
    res.send("new url call here")
})
app.listen(port,()=>{
    console.log(`Server is runnin on this Port number ${baseUrl}${port}`);
})