const { Router } = require("express")
const router = Router()
let { productEdit, edit ,save  ,productSave, productDetail, finder, productCart, productCreate, productCreateDetail, productDelete, destroid } = require('../controllers/product.controller');
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({ storage: storage('productos') });
const middlewareEdicion = require('../middlewares/edicion');

router.get("/finder", finder)
router.get("/products/create", productCreate)
router.get("/products/create/details", productCreateDetail)
router.post('/products/save',[upload.any()],save)
router.put('/products/editForm/:id',middlewareEdicion,edit)
router.get('/products/productDelete/:id', productDelete) 
router.post("/products", [upload.any()], productSave) // verificar
router.get("/carrito", productCart)
router.get("/products/edit/:id", productEdit)
router.get("/products/:id", productDetail)




router.delete('/delete/:id',destroid) 



module.exports = router