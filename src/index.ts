import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoutes from "../routes/product";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000; 

const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB is connected successfully");
    app.listen(PORT, () =>
      console.log(`Server is running on PORT : http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(error));

app.use("/", productRoutes);
app.get("/", (req, res) => res.send("Hello express crud operation ")),
app.all("*", (req, res) => res.send("That route is doesn't exit "));
