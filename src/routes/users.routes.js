const {Router}= require("express")
const router = Router()	
const middlewares = require("../validation/register.js");

const { login,  register, process } = require ('../controllers/users.controller');


router.get("/login", login)
router.post("/register/", middlewares , process)
router.get("/register", register)


module.exports = router