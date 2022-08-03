const { Router } = require("express")
const router = Router()
const middlewareRegister = require("../middlewares/register.js");
const middlewareLogin = require("../middlewares/login.js");

const { login, register, process } = require('../controllers/users.controller');

// login
router.get("/login", login)
router.post('/access', middlewareLogin, access)

// register
router.get("/register", register)
router.post("/register/", middlewareRegister, process)


module.exports = router