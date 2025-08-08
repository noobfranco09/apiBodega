import * as db from './productos.model.js';

export const obtenerTodos = async (req, res) => {
  try {
    const lista = await db.obtenerTodos(); 
    res.json(lista);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
