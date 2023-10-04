const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = name;
  }
  let apiData = Product.find(queryObject);
  let page = Number(req.query.page) || 1;
  let productLimit = Number(req.query.productLimit) || 10;

  let skip = (page - 1) * productLimit;
  apiData = apiData.skip(skip).productLimit(productLimit);

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};

const createNewProduct = async (req, res) => {
  try {
    const newProduct = Product(req.body);
    await newProduct.save()
    console.log(newProduct)
    return res.status(200).json({ process: newProduct })
  } catch (error) {

  }
}
module.exports = { getAllProducts, getAllProductsTesting, createNewProduct };
