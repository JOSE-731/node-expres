const getConnection = require('../libs/postgress');
const pool = require('../libs/postgress');
const { models } = require('../libs/sequelize'); //Exportamos los modelos

class UserServices {

    constructor() {
        this.pool = pool;
        this.pool.on('error', (err) => console.log(error));//Escuchar si hay algun error en la conexion
    }

    async create(data) {
        console.log(data)
        const newUser = await models.User.create(data);
        return newUser;
    }

    async find() {
        const rta = await models.User.findAll();//Optenemos todos los registros
        return rta;
    }

    async update(id, changes) {
        const user = await models.User.findByPk(id); //Buscamos el usuario
        const rta = await user.update(changes);//Hacemos update
        return rta;
    }

    async delete(){
        const user = await models.User.findByPk(id); //Buscamos el usuario
        await user.destroy();//Eliminamos
        return {id};
    }
}

module.exports = UserServices;