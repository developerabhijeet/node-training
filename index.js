const express = require('express');
const app = express()
const port = 4000;

app.get('/' , (req,res) => {
  res.send("Node with Express")
})

app.listen(port , () => {
  console.log(`Server is running at port ${port}`)
})