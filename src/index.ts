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

 

// import express from "express";
// import path from "path"
const express = require("express");
const path = require("path");
const app = express();

const port = 4500;
const publicPath = path.join(__dirname, "/");
app.use(express.static(publicPath));
app.get("/", (req:any, res:any) => {
  res.sendFile(`${publicPath}/index.html`);
});

// app.get("/", (req, res) => {
//   res.send("that's good ");
// });

app.listen(port, () => {
  console.log(`Localhost is running in host: ${port}`);
});