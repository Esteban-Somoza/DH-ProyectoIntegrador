const { readFileSync, writeFileSync } = require('fs')
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
    filter: function (subcategoria){
        // console.log(subcategoria);
        let file = resolve(__dirname, '../data', 'products.json')
        let data = readFileSync(file)
        let products = JSON.parse(data);
        // let filter = products.filter(product => product.name.toLowerCase().indexOf(subcategoria.toLowerCase()) > -1)
        let productFilter = products.filter(product => product.subCategoria == subcategoria)
        // console.log(productFilter);
        return productFilter
    }
    // create: function (data) {
    //     let file = resolve(__dirname, '../data', 'products.json')
    //     let info = readinfoync(file)
    //     let registers = JSON.parse(info)
    //     let lastProduct = products(registers.length - 1)

    //     return Object({
    //         "id": products.length == 0 ? 1 : lastProduct.id + 1,
    //         "name": data.name,
    //         "price": parseInt(data.price),
    //         "description": data.description,
    //         "image": data.image
    //     })
    // },
    // write: function (data) {
    //     let file = resolve(__dirname, '../data', 'products.json');
    //     let info = JSON.stringify(data, null, 2);
    //     return writeFileSync(file, info);
    // }
}

