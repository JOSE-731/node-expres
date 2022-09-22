const express = require('express');//Exportamos express
const faker = require('faker');//Exportamos faker

const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params; //Obtenemos solo el id
    res.json(
        {
            id,
            name: "Leche",
            price: 5.000
        }
    )
})

//Para crear data falsa utilizamos npm i faker
router.get('/', (req, res) => {
    const { size } = req.query; //Se usa query para tomar parametros opcionales
    const limit = size || 10; //Si se le envia el parametro mostrará la cantida de registro que se le pase, de lo contrario mostrará 10
    const productos = [];
    for(let i = 0; i < limit; i++){
        productos.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        })
    }
    res.json(productos);
})


//Ruta post
router.post('/', (req, res)=>{
    const body = req.body; //Obtenemos todo la respuesta de lo que se envia por post
    res.json({
        message: 'created', //Le imprimimos un mensaje
        data: body//retornamos la data
    })
})


module.exports = router; //Importamos el modulo router