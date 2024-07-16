import axios from "axios";

const baseURL = "https://group1-backend.onrender.com/products";

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

const addToCart = async (productID) => {
    try {
        const token = localStorage.getItem('token');
        if(!token){
            window.location.href = '/login';
            throw new Error("No authenticated")
        }
        const response = await axiosInstance.post("/add-to-cart",
            {productID},
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response;
    } catch (error) {
        console.log("Error add product",error);
        throw error
    }
}
export { fetchProduct, productByCategory, addToCart }