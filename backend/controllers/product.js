
import Product from "../models/product.models.js";
export async function getProduct(req,res){
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export async function CreateProduct(req,res){
   try {
       const product = new Product(req.body);
       await product.save();
       res.json(product);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
}