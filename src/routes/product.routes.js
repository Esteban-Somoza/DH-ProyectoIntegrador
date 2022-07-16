const { Router } = require("express")
const router = Router()
let { productEdit, edit ,save  ,productSave, productDetail, productSearch, productCart, productCreate, productCreateDetail } = require('../controllers/product.controller');
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({ storage: storage('productos') });

router.get("/finder", productSearch)
router.get("/products/create", productCreate)
router.get("/products/create/details", productCreateDetail)
router.post('/products/save',[upload.any()],save)
router.put('/products/edit',[upload.any()],edit)


router.post("/products", [upload.any()], productSave) // verificar
router.get("/carrito", productCart)

router.get("/products/edit/:id", productEdit)
router.get("/products/:id", productDetail)
//app.get('/edit', (req, res) => res.render(path.join(__dirname, '/views/products/edit.ejs')));
//app.get('/create/product', (req, res) => res.render(path.join(__dirname, '/views/products/createProduct.ejs')));
// app.get('/edit', (req, res) => res.render(path.join(__dirname, '/views/products/edit.ejs')));
// app.get('/create/product', (req, res) => res.render(path.join(__dirname, '/views/products/createProduct.ejs')));

module.exports = router