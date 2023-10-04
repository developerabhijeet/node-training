const express = require("express");
const dataBaseConnection = require("./src/utils/db-config");

const app = express();
dataBaseConnection();

// middlewares
app.use(express.json());

app.get("/api", require("./src/routers/product-routers"));

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
