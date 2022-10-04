const {Sequelize} = require('sequelize');
//Pasamos la conexion
const {config} = require('../config/config');//Exportamos la estructura donde se definio las variables de entorno

//Codificando el usuario y contraseña
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//Creamos una nueva instancia
const sequelize = new Sequelize(URI, {
    dialect: 'postgres', //Especificamos la base de datos donde estemos conectados
    logging: true, //Cuando hagamos una consulta con el orm se devolverá la consulta, en sql
});

module.exports = sequelize;