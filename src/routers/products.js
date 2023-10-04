const express = require('express')

const { getAllProducts, getAllProductsTesting, createNewProduct } = require("./../controllers/products")

const router = express.Router();

router.get("/", getAllProducts);
router.get("/testing", getAllProductsTesting);
router.post("/createProduct", createNewProduct)

module.exports = router