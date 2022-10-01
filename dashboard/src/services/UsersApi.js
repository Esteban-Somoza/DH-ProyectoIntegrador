import axios from "axios";
const baseUrl = "http://localhost:3000/api"

export async function usersFindAll () {
    try {
        let url = `${baseUrl}/userFindAll`
        let users = await axios.get(url)
        return users.data.users
    } catch (error) {
        console.log(error);
    }
 
}
export async function findUserId(id) {
    try {
        let url = `${baseUrl}/user/${id}`
        let users = await axios.get(url)
        
        return users.data

    
        
        
    } catch (error) {
        console.log(error);
        
    }
}
