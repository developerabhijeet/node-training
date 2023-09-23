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

//Create server with express using File as well

const express = require('express')
const baseUrl =  "http://localhost:"
const path = require("path")
const app = express()
const port = 3001;
app.get("/",(req,res) => {
    res.send("Hello express call here")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact page using direct HTML Tag in the response...</h1>")
})
app.get("/service",(req,res)=>{
    res.sendFile(path.join(__dirname + "/service.html"))
})
app.listen(port,()=>{
    console.log(`Server is runnin on this Port number ${baseUrl}${port}`);
})