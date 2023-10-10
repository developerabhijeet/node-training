import express from 'express';
const app = express();
const port = 8000;
import mongoose,  { ConnectOptions }  from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from "./routes/userRoute"

mongoose
  .connect(process.env.MONGODB_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.set("view engine", "ejs");

app.use(bodyParser.json());

app.use("/api",userRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
