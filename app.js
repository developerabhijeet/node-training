// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./models/productModel");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.get("/products", async (req, res) => {
  try {
    const { page = 1, limit = 10, category } = req.query;
    const query = {};

    if (category) {
      query.category = category;
    }

    const products = await Product.find(query)
      .limit(parseInt(limit))
      .skip((page - 1) * limit);

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
