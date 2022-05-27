const express = require("express");
const { homedir } = require("os");

const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "../public")
app.use (express.static(publicPath)); //

app.listen(2000, () => {
    console.log("Servidor corriendo en el puerto 2000 exitosamente");
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve( __dirname, "./views/home.html"));
})
