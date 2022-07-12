const { index, find } = require("../models/product.model");
module.exports = {

  productDetail: (req, res) => {
    let product = find(parseInt(req.params.id))
    if (!product) {
      return res.redirect('/products')
    }

    let propiedades = Object.getOwnPropertyNames(product.information)
    let detalles = Object.getOwnPropertyNames(product.details)

    return res.render("./products/productDetail", {
      title: "Productos",
      product: product,
      informacion: propiedades,
      detalles: detalles,
      styles: [""]
    });
  },
  productSearch: (req, res) => {
    return res.render("./products/productSearch", {
      title: "Detalle de producto",
      products: index(),
    });
  },
  productCart: (req, res) => {
    return res.render("./products/productCart", {
      title: "Carrito de compras",
      products: index(),
    })
  },
  productCreate: (req, res) => {
    return res.render("./products/productCreate", {
      title: "Product Create",
      products: index(),
    })
  },
  productCreateDetail: (req, res) => {
    return res.render("./products/productCreateDetail", {
      title: "Product Create Details",
      products: index(),
    })
  },
  productSave: (req, res) => {
    let id = req.params.id;
    return res.render(`./products/${id}`, {
      title: "Product Create",
      products: index(),
    })
  },


};