const express = require('express');//Exportamos express
const router = express.Router();

router.get('/:categoriaId/producto/:productoId', (req, res) => {
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

module.exports = router;
