import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { userContext } from "../context/UserContext";

import Users from "../includes/Users";
import SideBar from "../includes/SideBar.jsx";
import DataPanel from "../includes/HomeDataPanel";
import Categories from "../includes/Categories";
import Statistics from "../includes/Statistics";

import categories from "../services/categorias"
import data from "../services/panelData"
import { usersFindAll } from "../services/UsersApi";
import { productFindAll } from "../services/productsApi";

import "./Home.css"
import "./userCss.css"


export default function Home() {
  const { user, userSet } = useContext(userContext)
  let [users, setUsers] = useState();
  let [cats, setCats] = useState();
  let [productStats, setProductStats] = useState();
  let [userStats, setUserStats] = useState();

  useEffect(() => {
    async function setData() {
      const users = await usersFindAll();
      const products = await productFindAll()
      let userStatistics = data(users.users[users.count - 1], users.count)
      let productStatistics = data(products.data[products.count - 1], products.count)
      setUsers(users);
      setProductStats(productStatistics)
      setUserStats(userStatistics)
      return setCats(categories)
    }
    setData();
  }, [])

  return (
    <div className='pageBody'>
      <SideBar />
      {!user && <Navigate replace to="/login" />}
      {cats &&
        <div className="data">
          <DataPanel title="Productos">
            <Statistics data={productStats} title="producto" />
            <Categories categories={cats} />
          </DataPanel>
          <DataPanel title="Usuarios">
            <Statistics data={userStats} title="usuario" />
            <Users users={users.users} />
          </DataPanel>
        </div>
      }
    </div>
  )
}
