import axios from "axios";

const baseURL = "http://localhost:8081/orders"

const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});
const fetchOrder = async () => {
  try {
    const response = await axiosInstance.get("/");
    return response.data;
  } catch (error) {
    console.log("Error fetching order", error);
    throw error;
  }
};

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

export { fetchUserOrder, deleteProductFromCart, checkoutOrder, increaseQuantity, decreaseQuantity ,fetchOrder}
