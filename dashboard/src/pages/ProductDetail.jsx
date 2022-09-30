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
        .then((product) => setProduct(product)) }
        ,[id])
    console.log(product)









    return (
        <>
            <div className="pageContainer">
                <h1>hola</h1>
                <SideBar />



            </div>


        </>)

}

