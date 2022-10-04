const getConnection = require('../libs/postgress');
const pool = require('../libs/postgress');
const {models} = require('../libs/sequelize'); //Exportamos los modelos

class UserServices {

    constructor(){
        this.pool = pool;
        this.pool.on('error', (err) => console.log(error));//Escuchar si hay algun error en la conexion
    }

    async find() {
        const rta = await models.User.findAll();//Optenemos todos los registros
        return rta;
    }
}

module.exports = UserServices;