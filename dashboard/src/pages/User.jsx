import React from "react";
import { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SideBar from "../includes/SideBar.jsx";
import bidet from "../../../public/images/productos/bidet1.jpeg";
import { usersFindAll } from "../services/UsersApi";
import "./userCss.css";

export default function User() {
  let [users, setUsers] = useState();

  useEffect(() => {
    async function fetchData() {
      const users = await usersFindAll();

      return setUsers(users);
    }
    fetchData();
  }, []);
  console.log(users);
  return (
    <>
      <div className="users__container">
        <SideBar />
        <div className="bloque">
          <div className="leftSide">
           

            <div className="leftSide__container">
              <h2>Bidet</h2>
              <img src={bidet} alt="" />
              <p>Marca</p>
            </div>
            <p>
              Bidet de diferentes marcas y lineas para suplir tus necesidades
            </p>
            <p>Caracteristica 1</p>
          </div>
          <div className="rightSide">
            <div className="adminContainer">
              <h5>Administradores</h5>
              <div>
              {users &&
                users.map((user, index) => <h5 key={index}>{user.imagen} </h5>)}
            </div>
            
              <div className="adminGrid"></div>
            </div>
            <div className="usersContainer">
              <h5>Otros usuarios</h5>
              <div className="usersGrid"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
