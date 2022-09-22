const express = require('express');//Exportamos express
const app = express();//Creamos una aplicacion de express
const port = 3000; //Definimos el puerto donde corre la aplicacion

app.get('/', (req, res) => { //Ruta
    res.send('Hola mundo');
})

app.get('/productos', (req, res) =>{
    res.json({
        name: "Leche",
        price: 5.000
    });
})

app.listen(port, ()=>{ //Definimos con listem, el pueto de nuestra aplicacion para que lo escuche
    console.log("Corriendo sin problemas");
})