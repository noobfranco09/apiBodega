import { Router } from "express"; 
import * as controller from './productos.controller.js';

const router = Router();

router.get('/',controller.obtenerTodos);
router.get('/:id',controller.obtenerPorId);
router.post('/',controller.crearProducto);
router.put('/',controller.actualizarProducto);
router.delete('/:id',controller.eliminarProducto);

export default router;