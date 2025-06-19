import express from 'express';
import { creaateProduct, deleteProduct, getProducts, updatProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", getProducts);
router.post("/", creaateProduct);
router.put("/:id", updatProduct);
router.delete("/:id", deleteProduct);

export default router;