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
    console.log(url);
}
export async function getOne(id) {
    try {
        let url = `${baseUrl}/user${id}`
        let query = await fetch (url)
        let data = await query.json()
        return data
        
    } catch (error) {
        console.log(error);
        
    }
}
