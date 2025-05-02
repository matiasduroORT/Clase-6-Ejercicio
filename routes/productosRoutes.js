import express from 'express';
import {
    ObtenerProductos,
    ObtenerProductosById,
    CrearProductos,
} from '../controllers/productosController.js'



const router = express.Router()


router.get('/api/productos', ObtenerProductos)
router.get('/api/productos/:id', ObtenerProductosById)
router.post('/api/productos', CrearProductos)


// Crear un nuevo Endpoint, GET, que la url sea /api/alumnos/pokemon/:id
// Que el controlador, reciba por query params, pokemonID 
// Y que le agregue el name del pokemon al alumno

//2- Crear endpoints para Productos para obtener todos los productos, 
//crear producto, y obtener por ID

export default router