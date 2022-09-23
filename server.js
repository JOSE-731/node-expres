const express = require('express');//Exportamos express
const routers = require('./router');//Exportamos donde tenemos las rutas

const app = express();//Creamos una aplicacion de express
const port = 3000; //Definimos el puerto donde corre la aplicacion

// Importar middleware
const { logErrors, errorHandler } = require('./middlewares/error.handler'); //importar las funciones que se uilizarán

app.use(express.json());//Agregamos middleware para obtener lo que se envia en post
app.get('/', (req, res) => { //Ruta
    res.send('Hola mundo');
})


routers(app);//Importamos y pasamos por parametros el app

//Utilizamos los middleware. Siempre deben ir después del routing:
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => { //Definimos con listem, el pueto de nuestra aplicacion para que lo escuche
    console.log("Corriendo sin problemas");
})

/*const express = require('express');
const app = express();
const port = 8080;
//aquí va tu ip
const IP = " 192.168.1.5";

app.listen(port, () => {
    console.log("http://"+ IP +":" + port + "/");
  });*/