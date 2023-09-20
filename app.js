const express = require('express')
const path = require('path')
const app = express()

const port = 3100
const publicPath = path.join(__dirname , "/public")
app.use(express.static(publicPath))
app.get("/" , (req, res) => {
  res.sendFile(`${publicPath}/index.html`)
})
app.listen(port , () => {
  console.log(`Localhost is running in port : ${port}`);
})