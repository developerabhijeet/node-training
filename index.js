const express = require('express')
//const path = require('path')
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")

dotenv.config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
connectToDatabase();

const productRoutes = require('./routes')

app.use(express.json())
app.use(cors())

// const publicPath = path.join(__dirname , "/public")
// app.use(express.static(publicPath))
// app.get("/" , (req, res) => {
//   res.sendFile(`${publicPath}/index.html`)
// })

app.use("/api/products", productRoutes)
app.listen(8000 , () => {
  console.log("Localhost is running in port : 8000");
})