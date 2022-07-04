const { index } = require("../models/users.model");
module.exports = {
  
  login: (req, res) => {
    return res.render("./users/login", {
      title: "Login",
      products: index
    });
  },
  
  register: (req, res) => {
    return res.render("./users/register", {
        title: "register",
        
    })
  },

};
