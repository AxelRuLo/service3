const express = require('express');
const ruta = express.Router();

ruta.get("/:numero1/:numero2", function (req, res) {
    try {

        let numero1 = parseInt(req.params.numero1)
        let numero2 = parseInt(req.params.numero2)
        let suma = numero1 + numero2
        res.send({suma});

    } catch (error) {
        res.send("erro de numeros")
    }
})

module.exports = ruta;