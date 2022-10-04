import { findId } from "../services/productsApi";
import { useState, useEffect } from 'react'
import { useParams, } from "react-router-dom";
import SideBar from "../includes/SideBar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import Categories from "../includes/Categories";
import categories from "../services/categorias"
import { Link } from "react-router-dom";

import "./ProductDetail.css";


export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        findId(id)
            .then((product) => setProduct(product))
    }

       , [id])
    //    let [otherCategories, setOtherCategories] = useState([])

    // useEffect(() => {
    //     let otherCategories = categories.filter(cat => cat.nombre !== category)
    //     return setOtherCategories(otherCategories)
    // }, [category])

    return (


        <div className="container">

            <SideBar />
            <div className="panel">
                <div className="contenedorTop">
                    <section className="contenedor">

                        <figure className="img">
                            <img id="imagen" src={product.imagen} alt="" />
                        </figure>
                        <article className="contenedorDatos">
                            <h1>
                                Nombre : {product.nombre}
                            </h1>

                            <h2> Precio ${product.precio}</h2>
                            <h2> Marca : {product.marca}</h2>
                        </article>

                    </section>


                    <section className="contenedorDeDatos">
                       {/* { 
                                 product.map((detalle, index) =>

                <link key={index} to={`/product/${detalle.color}`}><FontAwesomeIcon icon={faInfo} />  */}
                    <h2> Categoria :{product.categoria}</h2>
                    <h2>SubCategoria :{product.subcategoria} </h2>
                    {/* </link>  
                                 )} */}

                </section>
            </div>
            




        </div>




        </div >)
    //   <>
    //   <div className='categorias'>
    //     {
    //       categories.map((category, index) =>
    //         <Link key={index} to={`/products/${category.nombre}`} >
    //           <article className="cadaCategoria">
    //             <figure >
    //               <img src={category.imagen} alt="" className='categoriaImagen' /> Esteban
    //             </figure>
    //             <h4>{category.nombre}</h4>
    //           </article>
    //         </Link>
    //       )
    //     }
    //   </div>
    // </>
 

}

