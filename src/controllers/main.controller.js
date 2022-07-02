const { index } = require("../models/product.model");
module.exports = {
  home: (req, res) => {
    return res.render("index", {
      title: "Home",
      products: index,
    });
  },
  login: (req, res) => {
    return res.render("login", {
      title: "Login",
      products: index,
    });
  },
  productDetail: (req, res) => {
    return res.render("productDetail", {
      title: "Product Detail",
      products: index,
    });
  },
  productSearch: (req, res) => {
    return res.render("productSearch", {
      title: "Product Search",
      products: index,
    });
  },
  productCart: (req, res) => {
    return res.render("productCart", {
        title: "Product Cart",
        products: index,
    })
  },
  register: (req, res) => {
    return res.render("register", {
        title: "register",
        products: index,
    })
  },

};
