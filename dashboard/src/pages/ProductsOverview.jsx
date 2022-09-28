import { useState, useContext, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import SideBar from "../includes/SideBar.jsx";
import "./ProductsOverview.css";
import axios from "axios"
import { productFindAll } from "../services/productsApi";
let categories = ["baño", "cocina", "tanques"]

export default function ProductsOverview(props) {
    const { category } = useParams()
    let [products, setProducts] = useState([])
    let [otherCategories, setOtherCategories] = useState([])

    useEffect(() => {
        let otherCategories = categories.filter(cat => cat !== category)
        console.log(otherCategories);
        setOtherCategories(otherCategories)
        return
    }, [category])


    useEffect(() => {
        async function fetchData() {
            const products = await productFindAll()
            let filtederByCategory = products.filter(product => product.categoria === category)
            return setProducts(filtederByCategory)
        }
        fetchData()
    }, [category])

    return (
        <div className='pageBody'>
            <SideBar />
            <section className='panel'>
                <section className='products'>
                    {products &&
                        // <article>{products[0].nombre}</article>
                        products.map((prod, index) => <article key={index}>{prod.nombre}</article>)
                    }
                </section>
                <div className='categories'>
                    {otherCategories &&
                        // list.map((item, index) => <li key={index}><Link to={`/character/${item.id}`}>{item.name}</Link></li>)
                        otherCategories.map((cat, index) => <Link key={index} to={`/products/${cat}`}>{cat}</Link>)
                    }
                </div>
            </section>
        </div>
    )
}
