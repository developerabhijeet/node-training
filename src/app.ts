import express from 'express';
const app = express();
const port = 8000;
import bodyParser from 'body-parser';
import authRouter from "./routes/authRoutes"
import itemRouter from './routes/itemRoutes';

app.use(bodyParser.json());

app.use("/auth",authRouter);
app.use('/items', itemRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});