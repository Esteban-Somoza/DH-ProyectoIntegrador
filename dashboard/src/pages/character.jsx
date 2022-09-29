import { productFindAll } from "../services/productsApi";
import { useState, useEffect } from 'react'
import { useParams,} from "react-router-dom";

import "./character.css";

export default function character() {
    const { id } =useParams()
    const [char,setChar] =useState({})
    console.log("id")
    useEffect(()=>{productFindAll(id).then(setChar),[id]})
}

