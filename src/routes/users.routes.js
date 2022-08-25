const { Router } = require("express")
const router = Router()
const middlewareRegister = require("../middlewares/register");
const middlewareLogin = require("../middlewares/login.js");

const isLogged = require('../middlewares/isLogged');
const isAdmin = require('../middlewares/isAdmin')


/*<<<<<<< HEAD
const { login, register, process, access, logout,userEdit } = require  = require('../controllers/users.controller');
=======*/
const {perfil, login, register, process, access, logout, userEdit, processEdit } = require('../controllers/users.controller');
// login
router.get("/users/login", login)

router.get("/users/userEdit", userEdit)

router.put("/users/editConfirm",[isLogged],processEdit)
   
router.post('/users/access', middlewareLogin, access)

router.post('/users/logout',[isLogged], logout)

router.post('/users/logout',[isLogged],logout)
router.post('/users/logout',[isAdmin],logout)

router.get('/users/perfil', [isLogged], perfil )

// register
router.get("/users/register", register)
router.post("/users/register", middlewareRegister, process)
//edit
router.get("/users/userEdit", [isLogged], userEdit)

module.exports = router 