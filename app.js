const path = require('path');
const express = require('express');
const app = express();

app.listen(3000,() => console.log('Abiendo servidor en http://localhost:3000'))
let public = path.resolve(__dirname, './public')
app.use(express.static(public))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/productos', (req, res) => res.sendFile(path.join(__dirname, './views/productDetail.html')));
app.get('/buscador', (req, res) => res.sendFile(path.join(__dirname, './views/productSearch.html')));
app.get('/carrito', (req, res) => res.sendFile(path.join(__dirname, './views/productCart.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, './views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));
// app.get('/curso', (req, res) => res.send("Bienvenido al curso de nodejs"))

