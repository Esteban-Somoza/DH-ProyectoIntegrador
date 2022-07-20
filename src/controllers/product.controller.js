const { write, create, index, find, filter, edit, deleteImage } = require("../models/product.model");
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
    let productList = index()
    try {


      if (req.query && req.query.subcategoria) {
        productList = filter("subCategoria", req.query.subcategoria)
      }

      if (req.query && req.query.search) {
        productList = filter("search", req.query.search.toLowerCase())
        // productList = filter(product => product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1)
      }
      // console.log(productList.length);
      if (productList.length < 1) {
        productList = index()
      }

      return res.render("./products/finder", {
        title: "Detalle de producto",
        products: productList,
      });
    } catch (error) {
      console.log(error)
      res.redirect("./products/finder")
    }
  },


  productCart: (req, res) => {
    return res.render("./products/productCart", {
      title: "Carrito de compras",
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
    req.body.imagenProducto = req.files[0]?.filename
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
      deleteImage(productToEdit.imagen)
      req.body.imagenProducto = req.files[0].filename
    }

    let edited = edit(req.body, productToEdit)

    let productModified = products.map(p => {
      if (p.id == edited.id) {
        p = edited
      }
      return p
    });

    write(productModified)

    return res.redirect(`/products/${req.params.id}`)
  }
}