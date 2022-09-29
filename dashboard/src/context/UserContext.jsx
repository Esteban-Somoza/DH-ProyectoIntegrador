import { createContext, useState } from "react";

export const userContext = createContext(null)

export default function UserProvider(prop) {
    const [user, setUser] = useState(null)
    return (
        <userContext.Provider value={{ user, setUser }}>
            {prop.children}
        </userContext.Provider>)
}