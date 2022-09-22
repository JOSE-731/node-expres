const express = require('express');//Exportamos express
const router = express.Router();

router.get('/', (req, res) => {
    const { limit, offset } = req.query; //Se usa query para tomar parametros opcionales

    if (limit && offset) {
        res.json(
            {
                limit,
                offset
            }
        )
    } else {
        res.send("No hay data")
    }
})

module.exports = router; //Importamos el modulo router