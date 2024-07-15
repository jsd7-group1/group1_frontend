import axios from "axios";
import { contract } from "ionicons/icons";

const baseURL = "https://group1-backend.onrender.com/orders"

const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

const fetchUserOrder = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.get('/user',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error fetching data",error)
        throw error
    }
};

const deleteProductFromCart = async (orderID,productID) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.delete('/deleteProduct',{
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                orderID,
                productID
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error delete product",error);
        throw error
    }
};

const checkoutOrder = async ({ vat, orderTotal, customerName, contact, zipcode, address}) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.post('/checkout',{
            vat,
            orderTotal,
            customerName,
            contact,
            zipcode,
            address
        },{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response
    } catch (error) {
        console.log("Error checkout",error);
        throw error
    }
};

const increaseQuantity = async ({ orderID, productID }) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.patch('/increase',{
            orderID,
            productID,
        },{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response;
    } catch (error) {
        console.log("Increase Error",error)
        throw error
    }
};

const decreaseQuantity = async ({ orderID, productID }) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.patch('/decrease',{
            orderID,
            productID,
        },{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response;
    } catch (error) {
        console.log("Increase Error",error)
        throw error
    }
}

export { fetchUserOrder, deleteProductFromCart, checkoutOrder, increaseQuantity, decreaseQuantity }
