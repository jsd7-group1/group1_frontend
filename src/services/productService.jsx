import axios from "axios";

const baseURL = "http://localhost:8081/products";

const axiosInstance = axios.create({
    baseURL,
});

const fetchProduct = async () => {
    try {
        const response = await axiosInstance.get("/");
        return response.data;
    } catch (error) {
        console.log("Error fetching product", error);
        throw error;
    }
};

const productByCategory = async (categoryID) => {
    try {
        const response = await axiosInstance.get(`/category/${categoryID}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching product", error);
        throw error;
    }
};

const addToCart = async (productID) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.post("/add-to-cart",
            { productID },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log("Error add product", error);
        throw error;
    }
};

const deleteProduct = async (id) => {
    try {
        const response = await axiosInstance.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error deleting product", error);
        throw error;
    }
};

const fetchCategories = async () => {
    try {
        const response = await axiosInstance.get('/categories');
        return response.data;
    } catch (error) {
        console.log("Error fetching categories", error);
        throw error;
    }
};

const addProduct = async (newProduct) => {
    try {
        const response = await axiosInstance.post("/add", newProduct);
        return response.data;
    } catch (error) {
        console.log("Error adding product", error);
        throw error;
    }
};

export { fetchProduct, productByCategory, addToCart, deleteProduct, fetchCategories, addProduct };
