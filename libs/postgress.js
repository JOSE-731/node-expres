//En la carpeta libs tenemos todo lo referente a libreria
const {Pool} = require('pg');//Exportamos el driver de conexion  de postgrest que se instala npm i pg
const {config} = require('../config/config');//Exportamos la estructura donde se definio las variables de entorno

//Codificando el usuario y contraseña
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//Creamos la conexion
    const pool = new Pool({ connectionString: URI });

module.exports = pool;