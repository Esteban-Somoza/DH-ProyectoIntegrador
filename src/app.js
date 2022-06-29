const path = require('path');
const express = require('express');
const app = express();
const {resolve} = require('path');


const {port, callback} = require("../modules/listen.js");

const public = require('../modules/public.js');
app.use(public)

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.listen(port, callback(`Abriendo servidor en http://localhost:` + port))

app.get('/', (req, res) => res.render(path.join(__dirname, './views/index.ejs')));
app.get('/productos', (req, res) => res.render(path.join(__dirname, '/views/productDetail.ejs')));
app.get('/buscador', (req, res) => res.render(path.join(__dirname, '/views/productSearch.ejs')));
app.get('/carrito', (req, res) => res.render(path.join(__dirname, '/views/productCart.ejs')));
app.get('/register', (req, res) => res.render(path.join(__dirname, '/views/register.ejs')));
app.get('/login', (req, res) => res.render(path.join(__dirname, '/views/login.ejs')));

