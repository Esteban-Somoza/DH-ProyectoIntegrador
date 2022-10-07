import { useState, useContext, useEffect } from 'react'
import { useParams, Link, Navigate } from "react-router-dom";
import SideBar from "../includes/SideBar.jsx";
import Categories from "../includes/Categories.jsx";
import "./ProductsOverview.css";
import { productFindAll } from "../services/productsApi";
import categories from "../services/categorias"
import { userContext } from "../context/UserContext";

function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

let sendAlert = function () {
    alert("cant")
}


export default function ProductsOverview() {
    const { user, userSet } = useContext(userContext)
    const { category } = useParams()
    let [products, setProducts] = useState([])
    let [otherCategories, setOtherCategories] = useState([])


    useEffect(() => {
        let otherCategories = categories.filter(cat => cat.nombre !== category)
        return setOtherCategories(otherCategories)
    }, [category])


    useEffect(() => {
        async function fetchData() {
            const products = await productFindAll()
            let filtederByCategory = products.data.filter(product => product.categoria === category)
            return setProducts(filtederByCategory)
        }
        fetchData()
    }, [category])

    return (
        <div className='pageBody'>
            {!user && <Navigate replace to="/login" />}
            <SideBar />
            <section className='panel'>
                <h1>Categoria: {capitalizeFirstLetter(category)}</h1>
                <section className='products'>
                    {products &&
                        products.map((product, index) =>
                            <Link key={index} to={`/products/detail/${product.id}`}>
                                <article className="articuloProducto">
                                    <figure>
                                        <img src={product.imagen} alt="" className='imagenProducto' />
                                    </figure>
                                    <h5>{product.nombre}</h5>
                                </article>
                            </Link>)
                    }

                    
                </section>
                <div className='categories'>
                    <h3 className='titulo'>Otras Categorias</h3>
                    <Categories categories={otherCategories} />
                </div>
            </section>
        </div>
    )
}
