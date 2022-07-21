const { Router } = require("express")
const router = Router()
let { process,productEdit, edit ,save  ,productSave, productDetail, finder, productCart, productCreateDetail } = require('../controllers/product.controller');
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({ storage: storage('productos') });
const middlewareEdicion = require('../middlewares/edicion')
const middlewares = require('../validation/productCreate')

router.get("/finder", finder)
router.get("/products/create/details", productCreateDetail)
router.post('/products/save',[upload.any(),middlewares],process)


router.post("/products", [upload.any()], productSave) // verificar
router.get("/carrito", productCart)

router.put('/products/editForm/:id',middlewareEdicion,edit)
router.get("/products/edit/:id", productEdit)
router.get("/products/:id", productDetail)

module.exports = router