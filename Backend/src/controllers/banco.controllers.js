import { getConnection } from '../database/database.js';


const getUsuarios = async (req, res) => {
    try{
    const connection = await getConnection();
    const result = await connection.query('SELECT * from usuarios');
    res.json(result[0]);
}catch(error){
    console.log(error);
    res.status(500).send('Error al obtener los usuarios');
}
}



const getPrestamos = async (req, res) => {
    try{
    const connection = await getConnection();
    const result = await connection.query('SELECT * from prestamos');
    res.json(result[0]);
}catch(error){
    console.log(error);
    res.status(500).send('Error al obtener los prestamos');
}
};



const getTransacciones = async (req, res) => {
    try{
    const connection = await getConnection();
    const result = await connection.query('SELECT * from transacciones');
    res.json(result[0]);
}catch(error){
    console.log(error);
    res.status(500).send('Error al obtener las transacciones');
}
};



const getReportes = async (req, res) => {
    try{
    const connection = await getConnection();
    const result = await connection.query('SELECT * from reportes');
    res.json(result[0]);
}catch(error){
    console.log(error);
    res.status(500).send('Error al obtener los reportes');
}
};



export const metodosBanco = {
    getUsuarios, 
    getTransacciones,
    getPrestamos, 
    getReportes
};