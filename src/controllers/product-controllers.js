const APIResponce = require("../utils/APIResponce");
const Product = require("./../models/product-model");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return APIResponce.success(res, { data: products });
  } catch (err) {
    return APIResponce.error(res, 500, err.message);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return APIResponce.success(res, { data: product });
  } catch (err) {
    return APIResponce.error(res, 500, err.message);
  }
};

// get each time 10 products with pagination
const getPageProducts = async (req, res) => {
  try {
    const { page, limit } = req.params;
    const products = await Product.find().skip((page - 1) * limit).limit(limit); // prettier-ignore
    return APIResponce.success(res, { data: products });
  } catch (err) {
    return APIResponce.error(res, 500, err.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    return APIResponce.success(res, { data: product });
  } catch (err) {
    return APIResponce.error(res, 500, err.message);
  }
};

const filterProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const products = await Product.find({ name: { $regex: name, $options: "i" } }); // prettier-ignore
    return APIResponce.success(res, { data: products });
  } catch (err) {
    return APIResponce.error(res, 500, err.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    return APIResponce.success(res, { data: product });
  } catch (err) {
    return APIResponce.error(res, 500, err.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true }); // prettier-ignore
    return APIResponce.success(res, { data: product });
  } catch (err) {
    return APIResponce.error(res, 500, err.message);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  getPageProducts,
  createProduct,
  filterProduct,
  deleteProduct,
  updateProduct,
};
