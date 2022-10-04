const { Model, DataTypes, Sequelize } = require('sequelize'); //Exportamos las utilidades del ORM

const USER_TABLE = 'users'; //Definimos el nombre de la base de datos

//Definimos la estructura de la base de datos
const UserSchema = {
    //Definiendo la estructura de un campo
    id: {
        allowNull: false, //Que no permita null
        autoIncrement: true, //Que sea autoincremental
        primaryKey: true, //Que sea primary key
        type: DataTypes.INTEGER //Tipo entero
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
}

//Extendemos una clase del modelo
class User extends Model {
    //Definimos las relaciones
    static associate() {
      // models
    }
  
    //Retornamos una configuracion con la informacion de la tabla, nombre del modelo y timestamps(campo para la actualizacion etc)
    static config(sequelize) {
      return {
        sequelize,
        tableName: USER_TABLE,
        modelName: 'User',
        timestamps: false,
      };
    }
  }

  module.exports = { USER_TABLE, UserSchema, User };
