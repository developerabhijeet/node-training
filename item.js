import mongoose from 'mongoose';


const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const item = mongoose.model('Item', itemSchema);
export default item;