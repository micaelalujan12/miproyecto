
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const hbs = require('hbs');

mongoose.connect('mongodb://localhost:27017/micomercio').then(
    () => console.log('Conexión a la base de datos exitosa'),
    (err) => console.error('Error al conectar a la base de datos:', err)
);

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});