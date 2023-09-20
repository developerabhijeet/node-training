const express = require("express");

const app = express();
const port = "8081"
app.get("/",(req,res) => {
  res.sendFile("src/index.html",{root: __dirname})
})

app.listen(port,()=> console.log(`server is running at port ${port}`));