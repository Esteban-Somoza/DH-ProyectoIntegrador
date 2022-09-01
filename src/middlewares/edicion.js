const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({ storage: storage('productos') })
const isAdmin = require('../middlewares/isAdmin')
const productEdit = require('../validations/productEdit');

const middlewares= [upload.any(), isAdmin, productEdit]

module.exports = middlewares