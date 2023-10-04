import express from 'express';
import mongoose,  { ConnectOptions }  from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import itemRoutes from './routes/item.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use('/api', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});