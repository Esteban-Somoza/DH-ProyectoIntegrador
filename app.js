const path = require('path');
const express = require('express');
const server = express();

server.listen(3000,() => console.log('Abiendo servidor en http://localhost:3000'))
let public = path.resolve(__dirname, './public')
server.use(express.static(public))

server.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));

server.get('/productos', (req, res) => res.sendFile(path.join(__dirname, './views/productFinder.html')));
// server.get('/curso', (req, res) => res.send("Bienvenido al curso de nodejs"))

