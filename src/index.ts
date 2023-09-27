
import express from 'express';
import bodyParser from 'express';
import cors from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from '../routes/user'


const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const secretKey = process.env.SECRET_KEY || 'defaultsecret'; // Default value if SECRET_KEY is not set
const debugMode = process.env.DEBUG_MODE === 'true'; // Convert to boolean
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', userRoutes);
app.get("/", (req, res) => res.send("Hello express crud operation ")),
  app.all('*', (req, res) => res.send("That route is doesn't exit "))
app.listen(port, () =>
  console.log(`Server is running on port : http://localhost:${port}`))