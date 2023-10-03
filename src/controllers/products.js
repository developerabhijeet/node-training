import Product from "../model/products.js";

const getAllProducts = async (req, res) => {
  //Adding filter here by company and name of products
  const { company, name } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = name;
  }
  //add pagination logic here
  let apiData = Product.find(queryObject);
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};

export { getAllProducts, getAllProductsTesting };
