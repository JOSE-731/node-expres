const productRouter = require('./product.router');
const userRouter = require('./user.router');
const categoriRouter = require('./categoria.router');

function routerApi(app){
    app.use('/producto', productRouter);
    app.use('/users', userRouter);
    app.use('/categoria', categoriRouter);
}

module.exports = routerApi;