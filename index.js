import express, { json } from 'express';
import productosRouter from './modules/productos/productos.routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/apiBodega/productos',productosRouter);

app.listen('4100')
{
    console.log('Ejecutándose correctamente en el puerto 4100');
}