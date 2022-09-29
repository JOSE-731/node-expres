const getConnection = require('../libs/postgress');
const pool = require('../libs/postgress');

class UserServices {

    constructor(){
        this.pool = pool;
        this.pool.on('error', (err) => console.log(error));//Escuchar si hay algun error en la conexion
    }

    async find() {
        const query =  'SELECT * FROM task';
        const rta = await this.pool.query(query);
        return rta.rows
    }
}

module.exports = UserServices;