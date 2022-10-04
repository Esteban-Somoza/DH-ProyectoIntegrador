import { createContext, useState } from "react";
import { Navigate } from 'react-router-dom'

export const userContext = createContext(null)

export default function UserProvider(prop) {
    const [user, setUser] = useState(null)

    return (
        <userContext.Provider value={{ user, setUser }}>
            {prop.children}
        </userContext.Provider>)



}