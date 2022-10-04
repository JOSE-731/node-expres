//En este archivo se empezará hacer la conexion con los modelos
const { User, UserSchema } = require('./user.model');//Exportamos el modelo y el setup inicial que seria user y userschema

function setupModels(sequelize) {
    //Al modelo que exportamos, hacemos un init y le pasamos el esquema y la configuracion que hicimos
    User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;