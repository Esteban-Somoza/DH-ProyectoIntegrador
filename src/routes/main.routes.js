const {Router}= require("express")
const router = Router()	

let { home, login, productDetail, productSearch, productCart, register } = require ('../controllers/main.controller');

router.get("/", home)
router.get("/login", login)
router.get("/productos", productDetail)
router.get("/buscador", productSearch)
router.get("/carrito", productCart)
router.get("/register", register)

module.exports = router