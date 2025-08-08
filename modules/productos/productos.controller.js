import * as db from "./productos.model.js";

export const obtenerTodos = async (req, res) => {
  try {
    const lista = await db.obtenerTodos();
    res.status(200).json(lista);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const obtenerPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const lista = await db.obtenerPorId(id);
    res.status(200).json(lista);
  } catch (error) {
    console.log("Error al obtener los productos por id / productos.controller");
    res.status(500).json({ error: "error interno del servidor" });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const stock = req.body.stock;
    const precio = req.body.precio;
    const respuesta = await db.crearProducto(nombre, stock, precio);
    if (respuesta.affectedRows > 0) {
      res.status(201).json({ mensaje: "Producto creado exitosamente" });
    } else {
      throw new error();
    }
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const stock = req.body.stock;
    const precio = req.body.precio;
    const estado = req.body.estado;
    const id = req.body.idProducto;
    const respuesta = await db.actualizarProducto(
      nombre,
      stock,
      precio,
      estado,
      id
    );
    if (respuesta.affectedRows > 0) {
      res.status(202).json({ mensaje: "Actualizado con éxito" });
    } else {
      throw new error();
    }
  } catch (error) {
    console.log("Error al actualizar en productos.controller");
    res.status(500).json({ error: "error interno del servidor" });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await db.eliminarProducto(id);
    if (respuesta.affectedRows > 0) {
      res.status(200).json({mensaje:"Eliminado con éxito"});
    }else{
      throw new error;
    }
  } catch (error) {
    console.log("Error al eliminar el producto en productos.controller");
    res.status(500).json({error:"Error interno del servidor"});
  }
};
