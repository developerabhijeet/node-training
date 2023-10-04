const mongoose = require("mongoose");

const dataBaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dataBaseConnection;
