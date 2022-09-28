import { useState, useContext, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../../../public/images/logo-sanitario.svg";
import { userContext } from "../context/UserContext";
import "./SideBar.css";

export default function SideBar() {
    const { user, setUser } = useContext(userContext)

    const navigate = useNavigate()
    let logout = () => {
        setUser(null)
        return navigate("/")
    }

    return (
        <div className='sideBar'>
            <img src={logo} alt="" className='logo' />
            <h1>{user.nombre}</h1>
            <figure>
                <img src={user.imagen} alt="" className='profile' />
            </figure>
            <h3 onClick={logout}>logout</h3>
            {/* <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul> */}
        </div>
    )
}
