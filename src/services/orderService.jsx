import axios from "axios";

const baseURL = "http://localhost:8081/orders"

const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

const fetchUserOrder = async () => {
    try {
        const response = await axiosInstance.get('/user');
        return response.data;
    } catch (error) {
        console.log("Error fetching data",error)
        throw error
    }
};

const deleteProductFromCart = async (orderID,productID) => {
    try {
        const response = await axiosInstance.delete('/deleteProduct',{
            data: {
                orderID,
                productID 
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error delete product",error);
        throw error
    }
}

export { fetchUserOrder, deleteProductFromCart }
