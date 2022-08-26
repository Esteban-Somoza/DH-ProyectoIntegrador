const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({ storage: storage('avatars') })
const isLogged = require('../middlewares/isLogged')


const middlewares= [upload.any(), isLogged]


modules.exports = middlewares 