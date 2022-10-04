import { useContext, useRef, useEffect } from 'react'
import { userContext } from "../context/UserContext";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios"
import logo from "/logoNicuesa.svg";
import "./PublicLogin.css";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

let logInApiUrl = "http://localhost:3000/api/userLogin"

export default function PublicLogin() {
    const { user, setUser } = useContext(userContext)
    const navigate = useNavigate()

    let email = useRef();
    let password = useRef();

    useEffect(() => {
        let localStorageUser = localStorage.getItem("user")
        let localStorageUserData = JSON.parse(localStorageUser)

        if (localStorageUser) {
            setUser(localStorageUserData)
        }
    }, [])

    if (user) {
        return <Navigate replace to="/" />
    }

    const login = async e => {
        e.preventDefault()
        console.log("hi");
        let result = await axios.post(logInApiUrl, { email: email.current.value, password: password.current.value })
        console.log("by");
        console.log(result);

        if (!result.data) {
            MySwal.fire({
                position: 'center',
                icon: 'error',
                title: 'Usuario o contraseña inválido',
                showConfirmButton: false,
                timer: 1500
            })

            return navigate("/login")
        }

        if (!result.data.isAdmin) {
            MySwal.fire({
                position: 'center',
                icon: 'error',
                title: 'Esta página es solo para administradores',
                showConfirmButton: false,
                timer: 1500
            })

            return navigate("/login")
        }

        localStorage.setItem('user', JSON.stringify(result.data));
        setUser(result.data)
        return navigate("/")
    }

    return (
        <div className='loginPage'>
            <div className='form'>
                <figure>
                    <img src={logo} alt="" className='logo' />
                </figure>
                <form onSubmit={login} className="form">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" name="email" id="email" ref={email} />
                    <br />
                    <label htmlFor="password">Contraseña</label>
                    <br />
                    <input type="password" name="password" id="password" ref={password} />
                    <br />
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}
