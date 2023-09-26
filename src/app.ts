import express from 'express';
const app = express();
const port = 8000;
import bodyParser from 'body-parser';
// const bodyParser = require("body-parser");
import userRouter from "./routes/userRoute"

app.set("view engine", "ejs");

app.use(bodyParser.json());

app.use("/api",userRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
