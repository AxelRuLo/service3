var express = require('express');
var app = express();
const port = process.env.PORT || 3000
const calculadora = require("./routes/calculadora")



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/calculadora", calculadora)

app.listen(port, function () {
    console.log(`servicio 3 funcionando en el puerto ${port}`)
});