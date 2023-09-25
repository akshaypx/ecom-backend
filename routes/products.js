import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.get("/:id", getProduct);

router.delete("/:id", deleteProduct);

router.patch("/:id", updateProduct);

export default router;
