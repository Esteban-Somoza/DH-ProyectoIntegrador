const { Router } = require("express")
const router = Router()
let { process,productEdit, edit, productDetail, finder, productCart, productCreateDetail, productDelete, destroy } = require('../controllers/product.controller');
const middlewareEdicion = require('../middlewares/edicion')
const middlewareProductCreate = require('../middlewares/productCreate')

router.get("/products/finder", finder)
router.get("/products/create/details", productCreateDetail)
router.post('/products/save',[middlewareProductCreate],process) //ok
// router.post("/products", [upload.any()], productSave) // verificar
router.get("/carrito", productCart)

router.put('/products/editForm/:id',middlewareEdicion,edit)
router.get("/products/edit/:id", productEdit)
router.get("/products/:id", productDetail)
router.get('/products/productDelete/:id', productDelete) 
router.delete('/delete/:id',destroy) 

module.exports = router