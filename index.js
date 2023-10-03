import "./src/config/db.js"
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./src/routes/products.js";
//configaration for local enviromment
dotenv.config();
//define port here
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () =>
  console.log(`Your server is running successfully on PORT ${port}`)
);
