const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello Node js Dev")
})
 app.listen(
  port,
  console.log(`Server running on PORT ${port}...`)
);
