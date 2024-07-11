import axios from "axios";

const baseURL = "http://localhost:8081/users"

const axiosInstance = axios.create({
    baseURL
})

const loginService = async (email,password) => {
    try {
        const response = await axiosInstance.post("/login",{email,password});
        localStorage.setItem('token', response.data);
        return response.data
    } catch (error) {
        console.log("Login Error",error);
        throw error
    }
};

const newRegister = async (email,fullName,password,confirmPassword) => {
    try {
        const response = await axiosInstance.post("/register",{
            email,
            fullName,
            password,
            confirmPassword,
        });
        await loginService(email,password);
    } catch (error) {
        console.log("Register Unsuccessfull",error);
        throw error
    }
}
export { loginService, newRegister };