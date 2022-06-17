const path = require('path');
const express = require('express');
const app = express();
const {port, callback} = require("./modules/listen.js");

// const public = path.resolve(__dirname, './public')
// app.use(express.static(public))
const public = require('./modules/public.js');
app.use(public)

// app.listen(3000,() => console.log('Abiendo servidor en http://localhost:3000'))
app.listen(port, callback(`Abiendo servidor en http://localhost:` + port))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/productos', (req, res) => res.sendFile(path.join(__dirname, './views/productDetail.html')));
app.get('/buscador', (req, res) => res.sendFile(path.join(__dirname, './views/productSearch.html')));
app.get('/carrito', (req, res) => res.sendFile(path.join(__dirname, './views/productCart.html')));

