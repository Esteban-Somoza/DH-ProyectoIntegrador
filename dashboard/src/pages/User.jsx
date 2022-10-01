import React from "react";
import { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import SideBar from "../includes/SideBar.jsx";



import bidet from "../../../public/images/productos/bidet1.jpeg";
import { usersFindAll, findUserId } from "../services/UsersApi";
import "./userCss.css";

export default function User() {
  let [users, setUsers] = useState();
  let [userId, setUserId] = useState();
  let userAdmin = users && users.filter((user) => user.isAdmin === true);
  let {id}= useParams();
  let regularUser =
    users && users.filter((user) => user.isAdmin === false || null);
  


  useEffect(() => {
    async function fetchData() {
      const users = await usersFindAll();
      let otherUsers= users.filter((user) => user.id != id)
      console.log(id);
      return setUsers(otherUsers);
    }
    fetchData();
  }, []);


  useEffect(() => {
    async function fetchData() {
      const usersId = await findUserId(id);
      return setUserId(usersId);
    }
    fetchData();
  }, [id]);

  console.log(userId);
  return (
    <>
      <div className="users__container">
        <SideBar />
        <div className="bloque">
          <div className="leftSide">
            <div className="leftSide__container">
              <h2> {userId &&
                  userId.nombre}
                 

              </h2>

              <p>Email</p>
            </div>
            <p>Ubicacion</p>
            <p>Caracteristica</p>
            <p>Telefono</p>
          </div>
          <div className="rightSide">
            <h5>Administradores</h5>

            <div className="adminContainer">
              <div>
                {userAdmin &&
                  userAdmin.map((user, index) => <img key={index} src={user.imagen} />)}
              </div>
            </div>
            <h5>Usuarios</h5>
            <div className="adminContainer">
              <div>
                {regularUser &&
                  regularUser.map((user, index) => (
                    <img key={index} src={user.imagen} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
