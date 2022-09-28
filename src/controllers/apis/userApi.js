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
            let users = await usuarios.findAll({
                include: {
                    all: true
                }
            })
            let user = users.find(user => user.email === req.params.email)
            console.log(req.params);
            if(compareSync(req.params.password, user.password)){
                let userData = {
                    nombre: user.nombre,
                    apellido: user.apellido,
                    email: user.email,
                    telefono: user.telefono,
                    ubicacion: user.ubicacion,
                    imagen: user.imagen.nombre
                }
                return res.send( userData ).status(200)
            }

        } catch (error) {
            return res.status(500).json(error)
        }
    }

}
module.exports = userApi