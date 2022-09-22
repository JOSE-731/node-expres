const express = require('express');//Exportamos express
const faker = require('faker');//Exportamos faker
const app = express();//Creamos una aplicacion de express
const port = 3000; //Definimos el puerto donde corre la aplicacion

app.get('/', (req, res) => { //Ruta
    res.send('Hola mundo');
})


app.get('/producto/:id', (req, res) => {
    const { id } = req.params; //Obtenemos solo el id
    res.json(
        {
            id,
            name: "Leche",
            price: 5.000
        }
    )
})

app.get('/categoria/:categoriaId/producto/:productoId', (req, res) => {
    const { categoriaId, productoId } = req.params; //Obtenemos solo el id
    res.json(
        {
            categoriaId,
            productoId,
            name: "Leche",
            price: 5.000
        }
    )
})

app.get('/users', (req, res) => {
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

app.listen(port, () => { //Definimos con listem, el pueto de nuestra aplicacion para que lo escuche
    console.log("Corriendo sin problemas");
})

//Para crear data falsa utilizamos npm i faker
app.get('/productos', (req, res) => {
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


/*const express = require('express');
const app = express();
const port = 8080;
//aquí va tu ip
const IP = " 192.168.1.5";

app.listen(port, () => {
    console.log("http://"+ IP +":" + port + "/");
  });*/