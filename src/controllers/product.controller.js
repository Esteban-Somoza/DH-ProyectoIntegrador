const { index, find , filter} = require("../models/product.model");
module.exports = {

  productDetail: (req, res) => {
    let product = find(parseInt(req.params.id))

    if (!product) {
      return res.redirect('/finder')
    }

    let propiedades = Object.getOwnPropertyNames(product.information)
    let details = Object.getOwnPropertyNames(product.details)

    return res.render("./products/productDetail", {
      title: "Productos",
      product: product,
      informacion: propiedades,
      details: details,
      // styles: [""]
    });
  },
  
  productSearch: (req, res) => {
    let filtered = filter(req.query.subcategoria)
    
    if (filtered.length < 1) {
      filtered = index()
    }

    return res.render("./products/productSearch", {
      title: "Detalle de producto",
      products: filtered,
    });
  },

  productCart: (req, res) => {
    return res.render("./products/productCart", {
      title: "Carrito de compras",
    })
  },

  productCreate: (req, res) => {
    return res.render("./products/productCreate", {
      title: "Product Create",
    })
  },

  productCreateDetail: (req, res) => {
    return res.render("./products/productCreateDetail", {
      title: "Product Create Details",
    })
  },

  productSave: (req, res) => {
    let id = req.params.id;
    return res.render(`./products/${id}`, {
      title: "Product Save",
    })
  },


};