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


  finder: (req, res) => {
    let filtered = filter(req.query.subcategoria)

    if (filtered.length < 1) {
      filtered = index()
    }

    return res.render("./products/finder", {
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
    let productToEdit = find(parseInt(req.params.id))
    let products = index();

    req.body.imagenProducto = productToEdit.imagen
    if (req.files[0] != undefined) {
      req.body.imagenProducto = req.files[0].filename
    }
    // console.log(req.body.imagenProducto);

    let edited = edit(req.body, productToEdit)

    try {
      let productModified = products.map(p => {
        if (p.id == edited.id) {
          // console.log(p)
          p = edited
        }
        return p
      });

      write(productModified)
    } catch (error) {
      console.log(error);
    }

    return res.redirect(`/products/${req.params.id}`)
  }
}
