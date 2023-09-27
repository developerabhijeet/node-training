const express = require("express");
const dotenv = require("dotenv");
const blogRoute = require("./src/routers/blog-routers");
const connectToDatabase = require("./src/configs/db");

dotenv.config();
const app = express();
connectToDatabase();

// middlewares
app.use(express.json());

// routes
app.use("/api/blog", blogRoute);

// app is starting on the port
app.listen(process.env.APP_PORT, () => {
  console.log("App is starting on port " + process.env.APP_PORT);
});
