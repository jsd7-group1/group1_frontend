import axios from "axios";

const baseURL = "http://localhost:8081/users"

const axiosInstance = axios.create({
    baseURL
})

const loginService = async (email,password) => {
    try {
        const response = await axiosInstance.post("/login",{email,password});
        const { access_token } = response.data;
        localStorage.setItem('token', access_token);
        return response.data
    } catch (error) {
        console.log("Login Error",error);
        throw error
    }
}
export { loginService }