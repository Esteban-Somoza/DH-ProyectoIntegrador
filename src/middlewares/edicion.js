const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({ storage: storage('productos') })


// let updateImage 

// if () {

// }

const middlewares= [upload.any()]

module.exports = middlewares