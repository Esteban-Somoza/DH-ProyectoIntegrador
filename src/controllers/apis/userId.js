const { usuarios, imagen } = require("../../database/models/index");
const { Op } = require("sequelize");
//const {hashSync} = require('bcryptjs')

/* 

   api/users/:id
 Deberá devolver un objeto literal con la siguiente estructura:
■ Una propiedad por cada campo en base.
■ Una URL para la imagen de perfil (para mostrar la imagen).
■ Sin información sensible (ej: password y categoría). 

*/

const usuarioId = {
  userId: async (req, res) => {
    try {
      let usersId = await usuarios.findByPk(req.params.id, {
        include: {
          all: true,
        },
      })
      let data = {}
      data.id = usersId.id
      data.nombre = usersId.nombre;
      data.apellido = usersId.apellido;
      data.email = usersId.email
      data.telefono = usersId.telefono;
      data.ubicacion = usersId.ubicacion;
      

      data.imagen = "http://localhost:3000/images/avatars/"  + usersId.imagen.nombre
      


      return res.send({ data }).status(200)
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  imagenId: async (req, res) => {
    try {
      let imageId = await imagen.findByPk(req.params.id);
      return res.send({ imageId }).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = usuarioId;
