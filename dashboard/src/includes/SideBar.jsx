import { useState, useContext, useRef, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import logo from "../../../public/images/logo-sanitario.svg";
import profile from "../../../public/images/avatars/avatar-1659577307192-672982377.png";
import { userContext } from "../context/UserContext";
import "./SideBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
    const { user, setUser } = useContext(userContext)
    let [users, setUsers] = useState();

    console.log(users);
    const navigate = useNavigate()

    let logout = () => {
        setUser(null)
        localStorage.removeItem('user');
        return navigate("/")
    }

    useEffect(() => {
        return setUsers(user)
    }, [])


    return (
        <div className='sideBar'>
            <img src="/logoNicuesa.svg" alt="" className='logo' />
            <h1>{users && users.nombre}</h1>
            <figure>
                <img src={profile} alt="" className='profile' />
            </figure>
            <ul className='links'>
                <Link to={`/`}> Home </Link>
                <Link to={`/usuarios/1`}> Users </Link>
                <Link to={`/products/baño`}> Products </Link>
            </ul>
            <h3 onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} className="icon" />logout</h3>
        </div>
    )
}
