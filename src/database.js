const mysql= require('mysql');
const {promisify} = require('util'); //PROMESAS EVITAN CALLBACKS
const {database}= require('./keys');

//CREATE POOL HILOS QUE SE EJECUTAN EN SECUENCIA
const pool = mysql.createPool(database);
pool.getConnection((err, connection) =>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error ('LA CONEXION DE LA BD FUE CERRADA');
        }
        if(err.code == 'ER_CON_COUNT_ERROR'){
            console.error('HAT MUCHAS CONEXIONES ABIERTAS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('CONEXION REFUSED');
        }
    }

    if(connection) connection.release();
        console.log('CONECTADO A LA BD');
        return;
});

// PARA PODER HACER LAS CONSULTAS SE EXPORTA EL MODULO
//LAS PROMESAS SON PARA PROGRAMACION ASINCRONA, ALGO QUE PUEDE PASAR O NO.
//TIENE 3 ESTADOS PENDIENTE, REALIZADA Y RECHAZADA
 pool.query = promisify(pool.query); //PARA PODER HACER TODAS LAS CONSULTAS
module.exports = pool;