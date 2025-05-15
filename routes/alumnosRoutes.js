import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    getAlumnosSearch,
    CrearAlumno,
    login
} from '../controllers/alumnosController.js'
import { protegerRuta } from '../middlewares/authMiddlewares.js';

const router = express.Router()

router.post('/api/login', login)

router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.get('/api/search/alumnos', getAlumnosSearch)


router.post('/api/alumnos', protegerRuta , CrearAlumno)


export default router