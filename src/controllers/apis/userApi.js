const { usuarios, imagen } = require('../../database/models/index');
const {compareSync} = require('bcryptjs')

const userApi = {
    userExists: async (req, res) => {
        try {
            let users = await usuarios.findAll({
                include: {
                    all: true
                }
            })
            let exists = users.map(user => user.email).includes(req.params.email)

            return res.send({ exists }).status(200)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    userLogin: async (req, res) => {
        try {
            let user = await usuarios.findOne({
                include: {
                    all: true
                },
                where: { email: req.body.email }
            })
            
            // return res.status(200).json(user)
            if(compareSync(req.body.password, user.password)){
                let userData = {
                    nombre: user.nombre,
                    apellido: user.apellido,
                    email: user.email,
                    telefono: user.telefono,
                    ubicacion: user.ubicacion,
                    imagen: `http://localhost:3000/images/avatars/${user.imagen.nombre}`
                }
                return res.send( userData ).status(200)
            }
            
            else throw new Error("wrong password")

        } catch (error) {
            return res.status(500).json(error)
        }
    }

}
module.exports = userApi