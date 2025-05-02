import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,

    agregarPokemon,
    obtenerPokemonNombre,
} from '../controllers/alumnosController.js'



const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)
router.post('/api/alumnos/:id/pokemon/', agregarPokemon)
router.get('/api/alumnos/pokemon/:id', obtenerPokemonNombre)




// Crear un nuevo Endpoint, GET, que la url sea /api/alumnos/pokemon/:id
// Que el controlador, reciba por query params, pokemonID 
// Y que le agregue el name del pokemon al alumno

//2- Crear endpoints para Productos para obtener todos los productos, 
//crear producto, y obtener por ID

export default router