import { findId } from "../services/productsApi";
import { userContext } from "../context/UserContext";
import { useState, useEffect, useContext } from 'react'
import { useParams, Navigate } from "react-router-dom";
import SideBar from "../includes/SideBar.jsx";
import categories from "../services/categorias"
import Categories from "../includes/Categories.jsx";

import "./ProductDetail.css";

export default function ProductDetail() {
    const { user, setUser } = useContext(userContext)
    const { id } = useParams()
    const [product, setProduct] = useState({})
    // const [information, setInformation] = useState({})
    const [properties, setProperties] = useState([])


    function getProperties(information) {
        return Object.getOwnPropertyNames(information)
    }

    useEffect(() => {
        findId(id).then((product) => {
            setProduct(product)
            return product
        }).then(result => {
            setProperties(getProperties(result.informacion).filter(e => e !== "id"))
        })
    }, [])


    return (
        <div className="container">
            {!user && <Navigate replace to="/login" />}
            <SideBar />
            <div className="panel">
                <div className="contenedorTop">
                    <section className="contenedor">
                        <h1>
                            {product.nombre}
                        </h1>
                        <figure className="img">
                            <img id="imagen" src={product.imagen} alt="" />
                        </figure>
                        <article className="contenedorDatos">
                            <h2> Precio ${product.precio}</h2>
                            <h2> Marca : {product.marca}</h2>
                        </article>
                    </section>
                    <section className="contenedorDeDatos">
                        <h2> Categoria:{product.categoria}</h2>
                        <h2>SubCategoria:{product.subcategoria} </h2>
                        <br />
                        <h2>Información: </h2>
                        {properties &&
                            properties.map((p, index) =>
                                <h5 key={index}>{p}: {product.informacion[p]} </h5>
                            )}
                    </section>
                </div>
                <div className='categories'>
                    <h3 className='titulo'>Otras Categorias</h3>
                    <Categories categories={categories} />
                </div>
            </div>
            {/* esto  es detalle */}
        </div >)
}
