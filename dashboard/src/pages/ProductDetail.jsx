import { findId } from "../services/productsApi";
import { userContext } from "../context/UserContext";
import { useState, useEffect, useContext } from 'react'
import { useParams, Navigate } from "react-router-dom";
import SideBar from "../includes/SideBar.jsx";
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


    return (
        <div className="container">
            {!user && <Navigate replace to="/login" />}
            <SideBar />
            <div className="panel">

                <section className="contenedor">

                    <figure className="img">
                        <img id="data" src={product.imagen} alt="" />
                    </figure>
                    <article className="contenedorDatos">
                        <h1>
                            {/* Nombre : {product.informacion} */}
                        </h1>
                        <h1> Precio ${product.precio}</h1>
                        <h1> Marca : {product.marca}</h1>
                    </article>

                </section>
                <h1>{product.descripcion}</h1>
            </div>
        </div>)

}

