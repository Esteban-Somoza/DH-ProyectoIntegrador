const { Router } = require("express")
const { producto, imagen } = require("../../database/models/index")
const { Op } = require("sequelize");


const productApi = {
    findAll: async (req, res) => {
        try {
            let products = await producto.findAll
                ({
                    include:
                    {
                        all: true
                    }
                });

            let data = products.map(product => {
                let prod = {
                    id: product.id,
                    nombre: product.nombre,
                    descripcion: product.descripcion,
                    imagen: `http://localhost:3000/images/productos/${product.imagen.nombre}`,
                    detail: `http://localhost:3000/products/${product.id}`,
                    categoria: product.categoria,
                    subcategoria: product.subcategoria
                }
                return prod
            })

            let count = products.length

            return res.send({ count, data }).status(200)
        }
        catch (error) {
            return res.status(500).json(error);
        }
    },
    findOne: async (req, res) => {
        try {
            let product = await producto.findByPk
                ({
                    include:
                    {
                        all: true
                    }
                });

            let data = product.map(product => {
                let prod = {
                    id: product.id,
                    nombre: product.nombre,
                    descripcion: product.descripcion,
                    detail: `http://localhost:3000/images/productos/${product.imagen.nombre}`,
                    categoria: product.categoria,
                    subcategoria: product.subcategoria
                }
                return prod
            })

            return res.send(data).status(200)
        }
        catch (error) {
            return res.status(500).json(error);
        }
    },
    findId: async (req, res) => {
        try {
            let product = await producto.findByPk(req.params.id,{
                include:{ 
                    all: true
                }
            })
            let prod = {}
                prod.id=product.id,
               prod.nombre=product.nombre,
               prod.precio=product.precio,
               prod.marca=product.marca,
               prod.informacion=product.informacion,
               prod.descripcion=product.descripcion,
               prod.categoria=product.categoria,
               prod.subcategoria=product.subcategoria
            
            return res.send (prod).status(200)
        }
        catch (error) {
            return res.status(500).json(error);
            }
}
}

module.exports = productApi;