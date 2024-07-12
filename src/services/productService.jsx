import axios from "axios";

const baseURL = "http://localhost:8081/products";

const axiosInstance = axios.create({
    baseURL,
})

const fetchProduct = async () => {
    try {
        const response = await axiosInstance.get("/");
        return response.data;
    } catch (error) {
        console.log("Error fetching product",error);
        throw error
    }
};

const productByCategory = async () =>{
    try {
        const response = await axiosInstance.get(`/:categoryID`);
        return response.data;
    } catch (error) {
        console.log("Error fetching product",error);
        throw error
    }
}

export { fetchProduct, productByCategory }