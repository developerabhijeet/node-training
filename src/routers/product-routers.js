const express = require("express");
const {
  getAllProducts,
  getOneProduct,
  getPageProducts,
  createProduct,
  filterProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product-controllers");

const productRoute = express.Router();

productRoute.get("/products", getAllProducts);

productRoute.get("/products/:id", getOneProduct);

productRoute.get("/products/:page/:limit", getPageProducts);

productRoute.post("/products", createProduct);

productRoute.get("/products/:name", filterProduct);

productRoute.delete("/products/:id", deleteProduct);

productRoute.put("/products/:id", updateProduct);

module.exports = productRoute;
