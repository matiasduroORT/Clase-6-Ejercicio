import express from "express";
import {
  getProductos,
  getProductoById,
  CrearProducto,
} from "../controllers/productosController.js";

const router = express.Router();

router.get("/api/productos", getProductos);
router.get("/api/productos/:id", getProductoById);
router.post("/api/productos", CrearProducto);

export default router;
