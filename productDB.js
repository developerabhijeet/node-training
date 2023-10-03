import "./src/config/db.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./src/model/products.js";
import ProductJson from "./products.json";

dotenv.config();

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (err) {
    console.log("failed:: ", err);
  }
};

start();
