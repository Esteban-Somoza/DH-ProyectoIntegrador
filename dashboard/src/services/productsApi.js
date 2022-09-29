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

