const { write, create, index, find, filter, edit } = require("../models/product.model");
module.exports = {

  productDetail: (req, res) => {
    let product = find(parseInt(req.params.id))

    if (!product) {
      return res.redirect('/finder')
    }

    return res.render("./products/productDetail", {
      title: product.name,
      product: product,
      informacion: Object.getOwnPropertyNames(product.information),
      details: Object.getOwnPropertyNames(product.details),
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


  save: (req, res) => {
    req.body.imagenProducto = req.files[0].filename
    let newProduct = create(req.body)
    let products = index();
    products.push(newProduct)
    write(products)
    return res.redirect('/finder')
  },


  productEdit: (req, res) => {
    let product = find(parseInt(req.params.id))
    if (!product) {
      return res.redirect('/finder')
    }
    return res.render('./products/productEdit', {
      title: `Edit ${product.name}`,
      product: product
    })
  },


  edit: (req, res) => {
    console.log(req.params.id);
    let productToEdit = find(parseInt(req.params.id))
    let products = index();
    let edited = edit(req.body)

    // let productModified = products.map(p => {
    //   if (p.id == product.id) {
    //     p.name = req.body.name
    //     p.description = req.body.description
    //     p.price = parseInt(req.body.price)
    //     p.image = req.files && req.files.length > 0 ? req.files[0].filename : p.image
    //   }
    // });
    console.log(productToEdit);
    console.log(edited);
    productToEdit = edited

    write(products)

    return res.redirect('/products/detail/')
  }
  /*
  productDelate: (req, res) => {

  } */
}  