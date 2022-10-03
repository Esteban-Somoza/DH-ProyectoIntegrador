import { findId } from "../services/productsApi";
import { useState, useEffect } from 'react'
import { useParams, } from "react-router-dom";
import SideBar from "../includes/SideBar.jsx";
import "./ProductDetail.css";


export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        findId(id)
            .then((product) => setProduct(product))
    }
        , [id])
    console.log(product)

    return (
        <>
            <div className="panel">
                <SideBar />
                <section className="contenedor">
                    <figure className="img">
                        <img id="data" src={product.imagen} alt="" />
                    </figure>
                    <article className="contenedorDatos">
                        <h1>
                            Nombre : {product.nombre}
                        </h1>
                        <h1> Precio ${product.precio}</h1>
                        <h1> Marca : {product.marca}</h1>
                    </article>
                </section>          
                    <h1>{product.descripcion}</h1>


                
            </div>




        </>)

}

