const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const taskRouter = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI;

app.use(bodyParser.json());
app.use(cors());
app.use('/tasks',taskRouter);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});