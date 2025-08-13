
import express from "express"
import Product from "../models/product.models.js"
import {getProduct,CreateProduct} from "../controllers/product.js"
const router =express.Router();


router.get("/products", getProduct);

router.post("/products",CreateProduct); 

export default router;