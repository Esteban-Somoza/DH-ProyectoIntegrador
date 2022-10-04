const { usuarios, imagen } = require("../../database/models/index");
const { compareSync } = require("bcryptjs");

const userApi = {
  userExists: async (req, res) => {
    try {
      let users = await usuarios.findAll({
        include: {
          all: true,
        },
      });
      let exists = users.map((user) => user.email).includes(req.params.email);

      return res.send({ exists }).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  userLogin: async (req, res) => {
    try {
      let user = await usuarios.findOne({
        include: {
          all: true,
        },
        where: { email: req.body.email },
      });

      // return res.status(200).json(user)
      if (compareSync(req.body.password, user.password)) {
        let userData = {
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
          telefono: user.telefono,
          ubicacion: user.ubicacion,
          imagen: `http://localhost:3000/images/avatars/${user.imagen.nombre}`,
          isAdmin: user.isAdmin,
        };
        return res.send(userData).status(200);
      } else throw new Error("wrong password");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  findAll: async (req, res) => {
    try {
      let usersDb = await usuarios.findAll({
        include: {
          all: true,
        },
      });
      let users = usersDb.map((users) => {
        let usuario = {
          id: users.id,
          nombre: users.nombre,
          email: users.email,
          imagen: `http://localhost:3000/images/avatars/${users.imagen.nombre}`,
          isAdmin: users.isAdmin,
          ubicacion: users.ubicacion,
          telefono: users.telefono,
          
        
        };
        return usuario;
      });
      let count = users.length;
      return res.send( {count, users} ).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  userId: async (req, res) => {
    try {
      let usersId = await usuarios.findByPk(req.params.id, {
        include: {
          all: true,
        },
      });
      let data = {};
      data.id = usersId.id;
      data.nombre = usersId.nombre;
      data.apellido = usersId.apellido;
      data.email = usersId.email;
      data.telefono = usersId.telefono;
      data.ubicacion = usersId.ubicacion;

      data.imagen =
        "http://localhost:3000/images/avatars/" + usersId.imagen.nombre;

      return res.send(data).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
module.exports = userApi;
