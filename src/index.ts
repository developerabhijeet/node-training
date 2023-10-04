import express from "express";
import bodyParser from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import productRoutes from "../routes/product";

const PORT = process.env.PORT || 4500; // Default to 3000 if PORT is not set
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

const app = express();

app.use(bodyParser.json());
app.use("/", productRoutes);
app.get("/", (req, res) => res.send("Crud Operation ")),
  app.all("*", (req, res) => res.send("That route is doesn't exit "));
