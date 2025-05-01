import express from 'express';
import {
    getProductos,
    crearProducto,
    buscarProductoPorId,
} from '../controllers/productosController.js';

const router = express.Router()

router.get('/api/productos', getProductos)
router.get('/api/productos/:id', buscarProductoPorId)
router.post('/api/productos', crearProducto)

export default router