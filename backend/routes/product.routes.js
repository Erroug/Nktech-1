
import express from "express"
import Product from "../models/product.models.js"
import {getProduct,getFilteredProducts} from "../controllers/product.js"
const router =express.Router();


router.get("/products", getProduct);
router.get("products/sort",getFilteredProducts);



// router.post("/products",CreateProduct); 

export default router;