import {db} from '../db/dbConection.js';

export const obtenerTodos = async()=>{
    const [rows]= await db.query("select * from productos;");
    return rows;
}

export const obtenerPorId= async(id)=>{
    const [rows]= await db.query(`select * from productos where idProducto = ?`,[id]);
    return rows;
}

export const crearProducto = async(nombre,stock,precio,)=>{
    const [rows] = await db.query(`insert into productos (nombre,stock,precio,estado) 
        values (?,?,?,?)`,[nombre,stock,  precio,1]);
    return rows;
}

export const actualizarProducto = async(nombre,stock,precio,estado,id)=>
{
    const [rows]= await db.query("update productos set nombre = ?,stock = ?, precio = ?, estado = ? where idProducto = ?"
        ,[nombre,stock,precio,estado,id]);
    return rows;
}

export const eliminarProducto = async(id)=>{
    const [rows]= await db.query("update productos set estado = 0 where idProducto = ?",[id]);
    return rows;
}