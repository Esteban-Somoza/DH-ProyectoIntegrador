const { index } = require("../models/product.model");
module.exports = {

  productDetail: (req, res) => {
    return res.render("./products/productDetail", {
      title: "Product Detail",
      products: index,
    });
  },
  productSearch: (req, res) => {
    return res.render("./products/productSearch", {
      title: "Product Search",
      products: index,
    });
  },
  productCart: (req, res) => {
    return res.render("./products/productCart", {
        title: "Product Cart",
        products: index,
    })
  },
  productCreate: (req, res) => {
    return res.render("./products/create", {
        title: "Product Create",
        products: index,
    })
  },
  productSave: (req, res) => {
    let id = req.params.id;
    return res.render(`./products/${id}`, {
        title: "Product Create",
        products: index,
    })
  },
 
};