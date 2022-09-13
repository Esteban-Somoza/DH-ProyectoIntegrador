const { usuarios, imagen } = require('../../database/models/index');
const { Op } = require("sequelize")

const userApi = {
    allUsers: async (req, res) => {
        try {
            let users = await usuarios.findAll({
                include:{
                    all:true
                }
            })
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = userApi