const {Router}= require("express")
const router = Router()	

let {  productDetail, productSearch, productCart, } = require ('../controllers/product.controller');


router.get("/productos", productDetail)
router.get("/buscador", productSearch)
router.get("/carrito", productCart)


module.exports = router