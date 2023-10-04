// seedData.js
const mongoose = require("mongoose");
const Product = require("./models/productModel");

mongoose.connect("mongodb://localhost/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productsData = [
  {
    name: "Product 1",
    description: "Description for Product 1",
    price: 19.99,
    category: "Category A",
  },
  {
    name: "Product 2",
    description: "Description for Product 2",
    price: 29.99,
    category: "Category B",
  },
  {
    name: "Product 3",
    description: "Description for Product 3",
    price: 39.99,
    category: "Category A",
  },
];

async function seedData() {
  try {
    await Product.deleteMany(); // Remove existing products
    await Product.insertMany(productsData);
    console.log("Data seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedData();
