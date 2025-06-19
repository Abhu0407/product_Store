// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';

import productRouters from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to parse JSON data in the body of the request

app.use("/api/products", productRouters);


app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localHost:" + PORT); 
});


