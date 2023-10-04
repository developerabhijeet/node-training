import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, default: null },
  price: { type: Number, default: null },
  product_id: { type: Number, unique: true },
  token: { type: String },
});

export default mongoose.model("Product", productSchema);
