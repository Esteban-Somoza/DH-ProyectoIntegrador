const { usuarios, imagen } = require('../../database/models/index');
const { Op } = require("sequelize")

const userApi = {
    userExists: async (req, res) => {
        console.log(req.params.email);
        try {
            let users = await usuarios.findAll({
                include:{
                    all:true
                }
            })
            let exists = users.map(user => user.email).includes(req.params.email)
            console.log(exists);
            return res.send({exists}).status(200)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = userApi