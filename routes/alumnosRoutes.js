import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
} from '../controllers/alumnosController.js'

const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)

// Crear un nuevo Endpoint, GET, que la url sea /api/alumnos/pokemon/:id
// Que el controlador, reciba por query params, pokemonID 
// Y que le agregue el name del pokemon al alumno


export default router