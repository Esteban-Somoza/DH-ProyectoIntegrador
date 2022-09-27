const {Router}= require("express")
const { usuarios } = require('../../database/models/index');

const {Op} = require("sequelize");


const userFindAll ={
    findAll:  async (req, res) => {
    try {
        let users = await usuarios.findAll
        ({ include: 
            { 
                nombre: true,
                 
            } 
        });
return res.send(users).json(users);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}}
module.exports = userFindAll;