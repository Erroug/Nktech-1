import express from "express"
import dotenv from "dotenv"
import cors from 'cors';

import  productroutes from "./routes/product.routes.js"
import ConnectionDB from "./db/db.js"
import Product from "./models/product.models.js"


import sendEmailroute from "./routes/sendEmail.routes.js"


dotenv.config()
const app=express()
const PORT =process.env.PORT||5000

ConnectionDB()
// await Product.insertMany([
//   {
//     title: "E-Commerce Marketplace (Multivendor)",
//     oldPrice: 75000,
//     price: 50000,
//     sale: true,
//     image: "https://example.com/images/ecommerce-multivendor.png"
//   },
//   {
//     title: "Family Tree",
//     oldPrice: 80000,
//     price: 50000,
//     sale: true,
//     image: "https://example.com/images/family-tree.png"
//   },
//   {
//     title: "Gold",
//     oldPrice: 12000,
//     price: 12000,
//     sale: false,
//     image: "https://example.com/images/gold.png"
//   },
//   {
//     title: "Hospital Management System",
//     oldPrice: 75000,
//     price: 75000,
//     sale: false,
//     image: "https://example.com/images/hospital-management.png"
//   }
// ]);


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST","PUT","DELETE"],
    credentials: true
}));

app.use(express.json());
app.use("/api",productroutes)
app.use("/api/mail", sendEmailroute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
