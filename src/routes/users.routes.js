const {Router}= require("express")
const router = Router()	

let { login,  register } = require ('../controllers/users.controller');


router.get("/login", login)

router.get("/register", register)

module.exports = router