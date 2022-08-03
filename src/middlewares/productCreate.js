const multer = require('multer');
const storage = require('../modules/storage');
const productCreate = require('../validations/productCreate');
const upload = multer({storage: storage('productos')});

module.exports = [upload.any(), productCreate]