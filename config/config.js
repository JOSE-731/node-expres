//Variables de entorno
//Instalamos el paquete npm i dotenv, para leer las variables del .env

require('dotenv').config(); //Ya con esto accedemos a las variables que esten en el .env
const config ={
    env: process.env.NODE_ENV || 'dev', //si no se cumple lo primero obtendra lo segundo
    port: process.env.PORTV || 3000,
    dbUser: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
}

module.exports = {config};