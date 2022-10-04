import { findId } from "../services/productsApi";
import { userContext } from "../context/UserContext";
import { useState, useEffect, useContext } from 'react'
import { useParams, Navigate } from "react-router-dom";
import SideBar from "../includes/SideBar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import Categories from "../includes/Categories";
import categories from "../services/categorias"
import { Link } from "react-router-dom";

import "./ProductDetail.css";


export default function ProductDetail() {
    const { user, userSet } = useContext(userContext)
    const { id } = useParams()
    const [product, setProduct] = useState({})
    let info = product.informacion

    useEffect(() => {
        findId(id)
            .then((product) => setProduct(product))
    }
        , [id])

    if (info) {
        console.log(info.id)
    }

    [id]
    //    let [otherCategories, setOtherCategories] = useState([])

    // useEffect(() => {
    //     let otherCategories = categories.filter(cat => cat.nombre !== category)
    //     return setOtherCategories(otherCategories)
    // }, [category])

    return (


        <div className="container">
            {!user && <Navigate replace to="/login" />}
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




        </div >
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

        // <div className="container">

        //     <SideBar />
        //     <div className="panel">

        //         <section className="contenedor">

        //             <figure className="img">
        //                 <img id="data" src={product.imagen} alt="" />
        //             </figure>
        //             <article className="contenedorDatos">
        //                 <h1>
        //                     {/* Nombre : {product.informacion} */}
        //                 </h1>
        //                 <h1> Precio ${product.precio}</h1>
        //                 <h1> Marca : {product.marca}</h1>
        //             </article>

        //         </section>
        //         <h1>{product.descripcion}</h1>
        //     </div>
        // </div >


    )
}

