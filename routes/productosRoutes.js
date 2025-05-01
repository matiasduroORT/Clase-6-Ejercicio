import express from 'express';
import {
    home,
    getProductos,
    crearProducto,
    buscarProductoPorId,
} from '../controllers/productosController.js';

const router = express.Router()


router.get('/', home);
router.get('/api/productos', getProductos)
router.get('/api/productos/:id', buscarProductoPorId)
router.post('/api/productos', crearProducto)
router.post('/api/')

export default router