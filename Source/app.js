const express = require("express");
const { homedir } = require("os");

const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "../public")
app.use (express.static(publicPath)); //

app.listen(2000, () => {
    console.log("Servidor corriendo en el puerto 2000 exitosamente");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve( __dirname, "./views/index.html"));
});

app.get("/carrito", (req, res) => {
    res.sendFile(path.resolve( __dirname, "./views/productcart.html"));
});

app.get("/productos", (req, res) => {
    res.sendFile(path.resolve( __dirname, "./views/productdetail.html"));
});

app.get("/registro", (req, res) => {
    res.sendFile(path.resolve( __dirname, "./views/register.html"));
});
