const express = require('express');//Exportamos express
const router = express.Router();

//Creamos una constante y exportamos los archivos donde se definen las rutas
const productRouter = require('./product.router');
const userRouter = require('./user.router');
const categoriRouter = require('./categoria.router');

//Creamos una funcion para definir los path
function routerApi(app){
    app.use('/api/v1', router);//Agregando path global
    router.use('/producto', productRouter);
    router.use('/users', userRouter);
    router.use('/categoria', categoriRouter);
}

module.exports = routerApi;