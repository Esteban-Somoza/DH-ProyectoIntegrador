const { body } = require("express-validator");
const { extname, resolve } = require("path");
const { unlinkSync } = require("fs");
const { index } = require("../models/users.model");
const { usuarios } = require('../database/models/index');

const register = [
    body("nombre")
        .notEmpty()
        .withMessage("El nombre debe contener minimo dos caracteres")
        .bail()
        .isLength({ min: 2 })
        .withMessage("El nombre debe contener minimo dos caracteres")
        .bail(),

    body("apellido")
        .notEmpty()
        .withMessage("El apellido debe contener minimo dos caracteres")
        .bail()
        .isLength({ min: 2, max: 16 })
        .withMessage("El nombre debe contener minimo dos caracteres")
        .bail(),

    body('avatar').custom((value, { req }) => {
        let archivos = req.files

        if (!archivos || archivos.length == 0) {
            return true
            // throw new Error('No se subio ninguna imagen')
        }
        let extensiones = ['.svg', '.png', '.jpg', '.jpeg']
        let avatar = archivos[0]
        let extension = extname(avatar.filename)

        if (!extensiones.includes(extension)) {
            unlinkSync(resolve(__dirname, '../../public/images/', 'avatars', avatar.filename))
            throw new Error('La imagen no tiene una extension valida')
        }

        if (avatar.size > 2097152) {
            unlinkSync(resolve(__dirname, '../../public/images/', 'avatars', avatar.filename))
            throw new Error('La imagen supera el peso de 2MB')
        }

        return true
    })

];
module.exports = register;