import { Router } from "express"; 
import * as controller from './productos.controller.js';

const router = Router();

router.get('/',controller.obtenerTodos);
// router.get();
// router.post();
// router.put();
// router.delete();

export default router;