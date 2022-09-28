const getConnection = require('../libs/postgress')

class UserServices {
    async find() {
        const client = await getConnection();
        const rta = await client.query('SELECT * FROM tasks');

        return rta.rows
    }
}

module.exports = UserServices;