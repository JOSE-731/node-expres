const express = require('express');//Exportamos express
const UserServices = require('../services/user.services');

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

module.exports = router; //Importamos el modulo router