const express = require('express');//Exportamos express
const ProductsServices = require('./../services/product.services');

const router = express.Router();
const services = new ProductsServices();//Instanciamos la clase

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
    //const { size } = req.query; //Se usa query para tomar parametros opcionales
   const product = services.find();
   res.json(product);
})


//Ruta post
router.post('/', (req, res)=>{
    const body = req.body; //Obtenemos todo la respuesta de lo que se envia por post
    res.status(201).json({
        message: 'created', //Le imprimimos un mensaje
        data: body//retornamos la data
    })
})

//Ruta patch (es lo mismo que la put)
router.patch('/:id', (req, res)=>{
    const { id } = req.params; //Obtenemos solo el id
    const product = service.findOne(id);
    res.json(product);
})

//Ruta delete
router.delete('/:id', (req, res)=>{
    const { id } = req.params; //Obtenemos solo el id
    res.json({
        message: 'deleted', //Le imprimimos un mensaje
        id,
    })
})



module.exports = router; //Importamos el modulo router