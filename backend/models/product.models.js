import mongoose, { model } from "mongoose"
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  oldPrice: { type: Number, required: true },
  price: { type: Number, required: true },
  sale: { type: Boolean, default: false },
  image: { type: String, required: true },
}, { timestamps: true });
const Product = mongoose.model("Product", productSchema);
export default Product;