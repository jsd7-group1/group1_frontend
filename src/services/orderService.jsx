import axios from "axios";

const baseURL = "http://localhost:8081/orders"
// log-in ผ่าน PostMan
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGUyNzYzMGU2NmQzYTc4MDAxNjE3NCIsImVtYWlsIjoidGVzdDZAZ21haWwuY29tIiwiaWF0IjoxNzIwNjc4NjU4LCJleHAiOjE3MjA3NjUwNTh9.8te_y-NDqZPLASBwyGAGjL5pGi1gjDegAniITuLP1vQ"

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
