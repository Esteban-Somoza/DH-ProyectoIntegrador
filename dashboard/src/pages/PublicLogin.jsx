import { useState , useContext } from 'react'
import { userContext } from "../context/UserContext";

export default function PublicLogin() {
    const {user, setUser} = useContext(userContext)

    const login = e => {
        e.preventDefault()
        setUser({
            
        })
    }
    return (
        <form onSubmit={login}>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="password">contraseña</label>
            <input type="password" name="password" id="password" />
            <button type="submit">send</button>
        </form>
    )
}
