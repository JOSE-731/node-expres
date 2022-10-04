const {Sequelize} = require('sequelize');
//Pasamos la conexion
const {config} = require('../config/config');//Exportamos la estructura donde se definio las variables de entorno
const  setupModels = require('../db/models');//Exportamos el setup de los modelos

//Codificando el usuario y contraseña
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//Creamos una nueva instancia
const sequelize = new Sequelize(URI, {
    dialect: 'postgres', //Especificamos la base de datos donde estemos conectados
    logging: true, //Cuando hagamos una consulta con el orm se devolverá la consulta, en sql
});

//Corremos el setup de los modelos y le pasamos la conexion
setupModels(sequelize);

//Ejecutamos sequelize para que se sincronice y ejecute las tablas que se definieron en el modelo
sequelize.sync();

module.exports = sequelize;