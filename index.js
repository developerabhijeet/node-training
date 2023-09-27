import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './db.js'
import router from './route.js';

const app = express();
dotenv.config();
const PORT = 8000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));