const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) => {
    res.sendFile((__dirname + '/views/home.html'));
});

app.get('*', (req,res) => {
    res.send("La ruta ingresada no es correcta");
});

app.listen(3030, function () {
    console.log("Servidor corriendo");
});

