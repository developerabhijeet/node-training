import express, { Router } from "express";
import {
  getAllProducts,
  getAllProductsTesting,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/testing", getAllProductsTesting);

export default router;
