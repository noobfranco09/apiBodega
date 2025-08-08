import {db} from '../db/dbConection.js';

export const obtenerTodos = async()=>{
    const [rows]= await db.query("select * from productos;");
    return rows;
}