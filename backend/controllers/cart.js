// import Product from "../models/product.models.js"


// export async function getcartdata(req,res){
//    try {
//        res.json(cart);
//    } catch (error) {
//        res.status(500).json({ message: error.message });
//    }
// }


// export async function createcart(req,res){
//    try {
//         const { product } = req.body;
//   const existing = cart.find((item) => item._id === product._id);
//   if (existing) {
//     existing.quantity += 1;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }
//   res.json(cart);
//    } catch (error) {
//        res.status(500).json({ message: error.message });
//    }

// }

// export async function deletecart(req,res){
//    try {
//        cart = cart.filter((item) => item._id !== req.params.id);
//   res.json(cart);
//    } catch (error) {
//        res.status(500).json({ message: error.message });
//    }

// }
