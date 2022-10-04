import React from "react";
import { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import SideBar from "../includes/SideBar.jsx";
import Users from "../includes/Users.jsx";

import bidet from "../../../public/images/productos/bidet1.jpeg";
import { usersFindAll, findUserId } from "../services/UsersApi";
import "./userCss.css";

export default function UserPanel() {
  let [users, setUsers] = useState();
  let [userId, setUserId] = useState();
  let [userAdmin, setUserAdmin] = useState();
  let [regularUser, setRegularUser] = useState();

  let { id } = useParams();

  // let userAdmin
  // let regularUser
  console.log(userAdmin, regularUser);
  
  useEffect(() => {
    async function fetchData() {
      const users = await usersFindAll();
      let otherUsers = users.users.filter((user) => user.id != id);
      return setUsers(otherUsers);
    }
    fetchData();
  }, [id]);
  
  useEffect(() => {
    async function fetchData() {
      const usersId = await findUserId(id);
      let userAdmin = users && users.filter((user) => user.isAdmin === true);
      let regularUser = users && users.filter((user) => user.isAdmin === false || user.isAdmin === null);
      setUserAdmin(userAdmin)
      setRegularUser(regularUser)
      return setUserId(usersId);
    }
    fetchData();
  }, [users]);

  return (
    <>
      <div className="users__container">
        <SideBar />
        <div className="bloque">
          <div className="leftSide">
            <div className="leftSide__container">
              <h1> {userId && userId.nombre}</h1>
              <img src={userId && userId.imagen} alt="" />
              <h3>Email</h3>
              <p>{userId && userId.email}</p>
              <h3>Telefono</h3>
              <p>{userId && userId.telefono}</p>
              <h3>Ubicacion</h3>
              <p>{userId && userId.ubicacion}</p>
    
            </div>
          </div>
          <div className="rightSide">
            <h5>Administradores</h5>
            <Users users={userAdmin} />
            <h5>Usuarios</h5>

            <Users users={regularUser} />

          </div>
        </div>
      </div>
    </>
  );
}
