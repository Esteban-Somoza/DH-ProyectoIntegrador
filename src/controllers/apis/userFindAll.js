const {Router}= require("express")
const { usuarios } = require('../../database/models/index');

const {Op} = require("sequelize");


const userFindAll ={
    findAll:  async (req, res) => {
    try {
        let usersDb = await usuarios.findAll
        ({ include: 
            { 
                all: true 
            } 
        });
        let users =usersDb.map(users=>{
            let usuario ={
                id:users.id,
                nombre:users.nombre,
                email:users.email,
            }
            return usuario;
        })
        let count = users.length
return res.send({count,users}).status(200);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}}
module.exports = userFindAll;