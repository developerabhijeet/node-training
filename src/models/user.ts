const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: Buffer,
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);
module.exports = User;
