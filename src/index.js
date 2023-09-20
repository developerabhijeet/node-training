//import required modules
import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 8000;

//Create HTML response
const publicPath = path.join(__dirname, "/public");
app.use(express.static(publicPath));

//create Route
app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

//Running Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
