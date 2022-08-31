const { validationResult } = require('express-validator');
const { write, create, index, find, filter, edit, deleteImage } = require("../models/product.model");
const { producto, imagen, informacion, linea } = require("../database/models/index")


module.exports = {
  productDetail: async (req, res) => {
    let productDB = await producto.findByPk(req.params.id, { include: { all: true } })

    if (!productDB) {
      return res.redirect('/products/finder')
    }

    let informacion = Object.getOwnPropertyNames(productDB.informacion.dataValues)
    
    return res.render("./products/productDetail", {
      title: productDB.nombre,
      styles: ["style", "header", "footer", "productDetail", "mediaQ-productDetail"],
      producto: productDB,  
      esquema: productDB.esquema,
      informacion: informacion,
    });
  },  


  finder: async (req, res) => {
    let products = await producto.findAll({ include: { all: true } })
    // console.log(products.length);
    // if (req.query && req.query.name) {
    //   producto = producto.filter(product => product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1)
    // }
    // let productList = index()

    try {
    //   if (req.query?.categoria) {
    //     productList = filter("categoria", req.query.categoria)
    //   }

    //   if (req.query && req.query.subcategoria) {
    //     productList = filter("subCategoria", req.query.subcategoria)
    //   }

    //   if (req.query && req.query.search) {
    //     productList = filter("search", req.query.search.toLowerCase())
    //     // productList = filter(product => product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1)
    //   }
    //   // console.log(productList.length);
    //   if (productList.length < 1) {
    //     productList = index()
    //   }

      return res.render("./products/productFinder", {
        title: "Detalle de producto",
        styles: ["style", "header", "footer", "productSearch", "mediaQ-productSearch"],
        products: products,
      });
    } catch (error) {
    console.log(error)
      res.redirect("./products/productFinder")
    }
  },


  productCart: (req, res) => {
    return res.render("./products/productCart", {
      title: "Carrito de compras",
      styles: ["style", "header", "footer", "productCart", "mediaQ-productCart"]
    })
  },


  productCreateDetail: (req, res) => {
    return res.render("./products/productCreateDetail", {
      title: "Product Create Details",
      styles: ["style", "header", "footer", "productDetail", "mediaQ-newproduct", "productofinal"]
    })
  },

  productEdit: async (req, res) => {
    let productDB = await producto.findByPk(req.params.id, { include: { all: true } })

    if (!productDB) {
      return res.redirect("/product/finder")
    }
    return res.render('./products/productEdit', {
      title: `Edit ${productDB.nombre}`,
      styles: ["style", "header", "footer", "productDetail", "mediaQ-newproduct", "productofinal"],
      product: productDB
    })
  },


  edit: async (req, res) => {
    let productDB = await producto.findByPk(req.params.id, { include: { all: true } })
    let imagenId = await imagen.findByPk(productDB.dataValues.imagenId)
    let informacionId = await informacion.findByPk(productDB.dataValues.informacionId)

    // req.body.imagenProducto = productDB.imagen.nombre

    if (req.files && req.files.length > 0) {
      deleteImage(productDB.dataValues.imagen.dataValues.nombre)

      await imagenId.update({ 
        nombre: req.files[0].filename
      })// actualizacion tabla IMAGEN segun Id
    }

    await informacionId.update({
      colores: req.body.colores,
      configuracion: req.body.configuracion,
      apto: req.body.apto,
      tecnologia: req.body.tecnologia,
      medidas: req.body.medidas,
      capacidad: req.body.capacidad,
      disenio: req.body.disenio,
    }) // actualizacion tabla INFORMACION segun Id


    await productDB.update({
      nombre: req.body.nombre,
      precio: req.body.price,
      marca: req.body.marca,
      linea: req.body.linea,
      descripcion: req.body.description,
    }) // actualizacion tabla PRODUCTO segun Id

    return res.redirect(`/products/${req.params.id}`)
  },


  productDelete:  async (req, res) => {
    let productDB = await producto.findByPk(req.params.id, { include: { all: true } })
    if (!productDB) {
      return res.redirect("/product/finder")
    }
   
    return res.render('./products/productDelete', {
      title: `delete ${productDB.nombre}`,
      styles: ["style", "header", "footer", "productDelete"],
      product: productDB
    })
  },

  destroy: async (req, res) => {
    let productDB =  await producto.findByPk(req.params.id, { include: { all: true } })
    let imagenId = await imagen.findByPk(productDB.dataValues.imagenId)
    let informacionId = await informacion.findByPk(productDB.dataValues.informacionId)

    if (!productDB) {
      return res.redirect("/product/finder")
    }
    deleteImage(productDB.dataValues.imagen.dataValues.nombre)
    //destruye la imagen del public

    await productDB.destroy()
    await imagenId.destroy()
    await informacionId.destroy()
    return res.redirect("/products/finder");
  },

  process: async function (req, res) {  
    let validaciones = validationResult(req)
    let { errors } = validaciones;

    if (errors && errors.length > 0) {
      deleteImage(req.files[0].filename)
      return res.render('products/productCreateDetail', {
        title: "Publicar un nuevo producto",
        styles: ["style", "header", "footer", "productDetail", "mediaQ-newproduct", "productofinal"],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }

    
    else  { 

      let imagenId 
  

      if (req.files && req.files.length > 0) {
  
        let nuevaImagen = await imagen.create({ 
         nombre: req.files[0].filename
        })
        imagenId = nuevaImagen.id
      }
      
      
      let nuevaInformacion = await informacion.create({
        colores: req.body.colores,
        configuracion: req.body.configuracion,
        apto: req.body.apto,
        tecnologia: req.body.tecnologia,
        medidas: req.body.medidas,
        capacidad: req.body.capacidad,
        disenio: req.body.disenio,
      }) // actualizacion tabla INFORMACION segun Id
  
  
      await producto.create({

        nombre: req.body.nombre,
        precio: req.body.price,
        imagenId: imagenId,
        categoria: req.body.categoria,
        subcategoria: req.body.subcategoria,
        informacionId: nuevaInformacion.id,
        marca: req.body.marca,
        linea: req.body.linea,
        descripcion: req.body.description,

      }) // actualizacion tabla PRODUCTO segun Id

     /* let nuevoProducto = await product.create(req.body)

      let images = await Promise.all(req.files.map( file => {
        return image.create({
          nombre: file.filename
        })
      }))

      let addProductImages = await Promise.all(images.map(image => {
        return imagesProducts.create({
          product: nuevoProducto.id,
          image: image.id
        })
      }))*/

    //  req.body.imagenProducto = req.files[0]?.filename
    //  let newProduct = create(req.body)
   //   let products = index();
   //   products.push(newProduct)
   //   write(products)
      return res.redirect("/products/finder")
    }
  }

}
