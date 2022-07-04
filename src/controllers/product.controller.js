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
 
};