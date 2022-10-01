import React from 'react'
import SideBar from "../includes/SideBar.jsx";
import "./Home.css"

export default function Home() {
  return (
    <div className='pageBody'>
      <SideBar />
      <section className='panel'>
        <section className='products'>
          <h2>Productos</h2>
        </section>
        <div className='categories'>
          <h2>Usuarios</h2>
        </div>
      </section>
    </div>

  )
}
