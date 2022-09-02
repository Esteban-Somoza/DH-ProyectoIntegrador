const { Router } = require("express")
const router = Router()
const middlewareRegister = require("../middlewares/register");
const middlewareLogin = require("../middlewares/login.js");
const middlewaresEditUser = require("../middlewares/register")
const isLogged = require('../middlewares/isLogged');
const isAdmin = require('../middlewares/isAdmin')
const {  destroyUser,perfil, login, register, process, access, logout, userEdit, processEdit } = require('../controllers/users.controller');

// login
router.get("/users/login", login)
router.post('/users/access', middlewareLogin, access)

// user logout
router.post('/users/logout', [isLogged], logout)

// perfil
router.get('/users/perfil', [isLogged], perfil)

// register
router.get("/users/register", register)
router.post("/users/register", middlewareRegister, process)

// User edit
router.get("/users/userEdit", [isLogged], userEdit)
router.put("/users/editConfirm", middlewaresEditUser, processEdit)

//User Delete
router.get("/users/deleteConfirm", [isLogged],destroyUser)
router.delete("/users/deleteConfirm", middlewaresEditUser, destroyUser)


module.exports = router 