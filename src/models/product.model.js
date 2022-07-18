const { readFileSync, writeFileSync , unlinkSync, unlink} = require('fs')
const { resolve } = require('path')

module.exports = {

    index: function () {
        let file = resolve(__dirname, '../data', 'products.json') // levanta DB
        let data = readFileSync(file) // convierte a JS
        return JSON.parse(data) //exporta
    },


    find: function (id) {
        let file = resolve(__dirname, '../data', 'products.json')
        let data = readFileSync(file)
        let products = JSON.parse(data);
        return products.find(product => product.id == id)
    },


    filter: function (subcategoria) {
        // console.log(subcategoria);
        let file = resolve(__dirname, '../data', 'products.json')
        let data = readFileSync(file)
        let products = JSON.parse(data);
        // let filter = products.filter(product => product.name.toLowerCase().indexOf(subcategoria.toLowerCase()) > -1)
        let productFilter = products.filter(product => product.subCategoria == subcategoria)
        // console.log(productFilter);
        return productFilter
    },


    write: function (data) {
        let file = resolve(__dirname, '../data', 'products.json');
        let info = JSON.stringify(data, null, 2);
        return writeFileSync(file, info);
    },


    create: function (data) {
        let file = resolve(__dirname, '../data', 'products.json');
        let info = readFileSync(file);
        let products = JSON.parse(info);
        let lastProduct = products[products.length - 1];
        return Object({
            id: products.length == 0 ? 1 : parseInt(lastProduct.id) + 1,
            name: data.nombreProducto,
            price: parseInt(data.price),
            imagen: data.imagenProducto,
            categoria: data.categoria,
            subCategoria: data.subCategoria,
            marca: data.marca,
            information: {
                colores: data.colores,
                linea: data.linea,
                diseño: data.diseño,
                configuracion: data.configuracion,
                apto: data.apto,
                tecnologia: data.tecnologia,
            },
            details: {
                description: data.descripcion,
                documento: data.documento,
                esquema: data.esquema,
            }
        })
    },


    edit: function (data, productoOriginal) {
        // let file = resolve(__dirname, '../data', 'products.json');
        // let info = readFileSync(file);
        let imagen = data.imagenProducto

        console.log("id es: " + productoOriginal.id)
        return Object({
            id: productoOriginal.id,
            name: data.nombreProducto,
            price: parseInt(data.price),
            imagen: imagen,
            categoria: data.categoria,
            subCategoria: data.subCategoria,
            marca: data.marca,
            information: {
                colores: data.colores,
                linea: data.linea,
                disenio: data.disenio,
                configuracion: data.configuracion,
                apto: data.apto,
                tecnologia: data.tecnologia,
            },
            details: {
                description: data.description,
                documento: data.documento,
                esquema: data.esquema,
            }
        })
    },

    deleteImage: function (file) {
        let route = resolve(__dirname, "../../public/images/productos/", file) 
        return unlinkSync(route)
    }
    /* delate: function(delate) {
         let file = resolve(__dirname, '../data', 'products.json');
 let info = readFileSync(file);
 return = ? ? 

}

    }
}
*/
}
