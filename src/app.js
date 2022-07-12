const path = require('path');
const express = require('express');
const app = express();
const {resolve} = require('path');
const {port, callback} = require("./modules/listen.js");
const public = require('./modules/public.js');

app.listen(port, callback(`Abriendo servidor en http://localhost:` + port))

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.use(public)

// Req.query Req.body //

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('method-override')('m'));


app.use(require('./routes/main.routes'))
app.use(require('./routes/product.routes'))
app.use(require('./routes/users.routes'))



