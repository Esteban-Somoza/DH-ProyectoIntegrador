import { useContext, useRef } from 'react'
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import logo from "../../../public/images/logo-sanitario.svg";
import "./PublicLogin.css";

let logInApiUrl = "http://localhost:3000/api/userLogin"

export default function PublicLogin() {
    const { user, setUser } = useContext(userContext)
    const navigate = useNavigate()

    let email = useRef();
    let password = useRef();

    const login = async e => {
        e.preventDefault()
        let result = await axios.post(logInApiUrl, { email: email.current.value, password: password.current.value })
        setUser(result.data)
        return navigate("/")
    }

    return (
        <>
            <figure>
                <img src={logo} alt="" />
            </figure>
            <form onSubmit={login} className="form">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" ref={email} />
                <br />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" ref={password} />
                <br />
                <button type="submit">Send</button>
            </form>
        </>
    )
}
