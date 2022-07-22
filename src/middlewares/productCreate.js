const multer = require('multer');
const storage = require('../modules/storage');
const productCreate = require('../validation/productCreate');
const upload = multer({storage: storage('avatar')});

module.exports = [upload.any(), productCreate.any]