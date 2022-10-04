const express = require('express');//Exportamos express
const UserServices = require('./../services/user.services');

const router = express.Router();
const service = new UserServices;

router.get('/',  async (req, res) => {
    try {
       const users = await service.find();
       res.json(users);
    } catch (error) {
        console.log(error)
    }
})

//Ruta post
router.post('/', async (req, res) => {
    try {
        const newUser = req.body; //Obtenemos todo la respuesta de lo que se envia por post
        const data = await service.create(newUser);
        res.status(201).json({
            message: 'created', //Le imprimimos un mensaje
            data: newUser//retornamos la data
        })
    } catch (error) {
        res.status(404).json({
            message: 'error', //Le imprimimos un mensaje
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const data = await service.delete(id);
        res.status(201).json({
            message: 'delete', //Le imprimimos un mensaje
            data: data//retornamos la data
        })
    } catch (error) {
        res.status(404).json({
            message: 'error', //Le imprimimos un mensaje
        })
    }
})


module.exports = router; //Importamos el modulo router