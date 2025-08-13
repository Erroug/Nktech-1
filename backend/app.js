import express from "express"
import dotenv from "dotenv"
import cors from 'cors';

import  productroutes from "./routes/product.routes.js"
// import cartroutes  from "./routes/cart.routes.js"
import ConnectionDB from "./db/db.js"
import Product from "./models/product.models.js"


import sendEmailroute from "./routes/sendEmail.routes.js"


dotenv.config()
const app=express()
const PORT =process.env.PORT||5000

ConnectionDB()


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST","PUT","DELETE"],
    credentials: true
}));

app.use(express.json());
app.use("/api/product",productroutes)
// app.use("/api/cart", cartroutes);
app.use("/api/mail", sendEmailroute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
