//Archivo de configuracion inicial para correr las migraciones
const {config} = require('../config/config');//Exportamos la estructura donde se definio las variables de entorno

//Codificando el usuario y contraseña
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
    development:{
        url:URI,
        dialect: 'postgres'
    },
    production:{
        url:URI,
        dialect: 'postgres'
    }
}