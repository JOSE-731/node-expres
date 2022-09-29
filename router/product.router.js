const express = require('express');//Exportamos express
const ProductsServices = require('./../services/product.services');

const router = express.Router();
const services = new ProductsServices();//Instanciamos la clase

/*router.get('/:id', (req, res) => {
    const { id } = req.params; //Obtenemos solo el id
    res.json(
        {
            id,
            name: "Leche",
            price: 5.000
        }
    )
})*/

//Todos los productos
router.get('/', async (req, res, next) => { //se agrega el next
    try {
      const product = await services.find();
      res.json(product);
    } catch (error) {
      next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
    }
  });

//Para crear data falsa utilizamos npm i faker
/*router.get('/', async (req, res) => {
    //const { size } = req.query; //Se usa query para tomar parametros opcionales
    const product = await services.find();
    res.json(product);
})*/

// Encontrar un producto por su id:
router.get('/:id', async (req, res, next) => { //se agrega el next
    try {
      const { id } = req.params;
      const product = await services.findOne(id);
      res.json(product);
    } catch (error) {
      next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
    }
  });


//Ruta post
router.post('/', async (req, res) => {
    try {
        const body = req.body; //Obtenemos todo la respuesta de lo que se envia por post
        const newProduct = await services.create(body);
        res.status(201).json({
            message: 'created', //Le imprimimos un mensaje
            data: body//retornamos la data
        })
    } catch (error) {
        res.status(404).json({
            message: 'error', //Le imprimimos un mensaje
        })
    }
})

//Ruta patch (es lo mismo que la put)
router.patch('/:id', async (req, res) => {
    const { id } = req.params; //Obtenemos solo el id
    const product = await service.findOne(id);
    res.json(product);
})

//Ruta delete
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params; //Obtenemos solo el id
        const rta = await services.delete(id);
        res.json({
            message: 'deleted', //Le imprimimos un mensaje
            rta
        })
    } catch (error) {
        res.status(404).json({
            message: 'error', //Le imprimimos un mensaje
        })
    }
})



module.exports = router; //Importamos el modulo router