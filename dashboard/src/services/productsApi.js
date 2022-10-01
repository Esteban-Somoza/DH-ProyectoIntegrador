import axios from "axios";
const baseUrl = "http://localhost:3000/api"

export async function productFindAll () {
    try {
        let endpoint = `${baseUrl}/productFindAll`
        let products = await axios.get(endpoint)
        return products.data.data
    } catch (error) {
        console.log(error);
    }
}
    export async function findId (id){
        try {
            let endpoint = `${baseUrl}/productfindId/${id}`
            let products = await axios.get(endpoint)
            return products.data
            
        } catch (error) 
        {
            console.log(error);
    }
}

