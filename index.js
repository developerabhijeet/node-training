const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

// configuration
dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api/v1/auth", require("./routes/auth-routes"));

// listening to the express server
app.listen(process.env.APP_PORT, () =>
  console.log(`Server is running successfully on PORT ${process.env.APP_PORT}`)
);
