
import Product from "../models/product.models.js"
import dotenv from "dotenv"
dotenv.config();

export async function getProduct(req, res) {
    try {
        // Fetch all products from DB
        const products = await Product.find();

        // If no products found
        if (!products || products.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No products found",
                data: []
            });
        }

        // Send success response
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        });

    } catch (error) {
        console.error("Error fetching products:", error);

        // Internal Server Error
        res.status(500).json({
            success: false,
            message: "Server error while fetching products",
            error: process.env.NODE_ENV === "development" ? error.message : undefined
        });
    }
}


// export async function CreateProduct(req,res){
//    try {
//        const product = new Product(req.body);
//        await product.save();
//        res.json(product);
//    } catch (error) {
//        res.status(500).json({ message: error.message });
//    }
// }



export async function getFilteredProducts(req, res) {
    try {
        const { sort } = req.query;
        let sortOptions = {};

        switch (sort) {
            case "popularity":
                sortOptions = { popularity: -1 };
                break;
            case "rating":
                sortOptions = { averageRating: -1 };
                break;
            case "latest":
                sortOptions = { createdAt: -1 };
                break;
            case "lowToHigh":
                sortOptions = { price: 1 };
                break;
            case "highToLow":
                sortOptions = { price: -1 };
                break;
            default:
                sortOptions = {}; // no sorting
        }

        const products = await Product.find().sort(sortOptions).lean();

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching products",
        });
    }
}