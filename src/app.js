const path = require('path');
const express = require('express');
const app = express();

const {port, callback} = require("../modules/listen.js");

const public = require('../modules/public.js');
app.use(public)

app.listen(port, callback(`Abriendo servidor en http://localhost:` + port))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/index.html')));
app.get('/productos', (req, res) => res.sendFile(path.join(__dirname, '/views/productDetail.html')));
app.get('/buscador', (req, res) => res.sendFile(path.join(__dirname, '/views/productSearch.html')));
app.get('/carrito', (req, res) => res.sendFile(path.join(__dirname, '/views/productCart.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, '/views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '/views/login.html')));

