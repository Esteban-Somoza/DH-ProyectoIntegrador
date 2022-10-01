import React from 'react'
import "./Categories.css";
import { Link } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <>
      <div className='categorias'>
        {
          categories.map((category, index) =>
            <Link key={index} to={`/products/${category.nombre}`} >
              <article className="cadaCategoria">
                <figure >
                  <img src={category.imagen} alt="" className='categoriaImagen' />
                </figure>
                <h4>{category.nombre}</h4>
              </article>
            </Link>
          )
        }
      </div>
    </>
  )
}
