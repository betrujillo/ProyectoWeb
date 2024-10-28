import {Router} from 'express';
import { metodosBanco } from '../controllers/banco.controllers.js';

const router = Router();

router.get('/usuarios', metodosBanco.getUsuarios);
router.get('/prestamos', metodosBanco.getPrestamos);
router.get('/transacciones', metodosBanco.getTransacciones);
router.get('/reportes', metodosBanco.getReportes);

export default router;