import axios from "axios";

const baseURL = "https://group1-backend.onrender.com/users";

const axiosInstance = axios.create({
  baseURL,
});

const loginService = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", { email, password });
    const token = response.data.access_token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    console.log("Login Error", error);
    throw error;
  }
};

const newRegister = async (email, fullName, password, confirmPassword) => {
  try {
    const response = await axiosInstance.post("/register", {
      email,
      fullName,
      password,
      confirmPassword,
    });
    await loginService(email, password);
  } catch (error) {
    console.log("Register Unsuccessfull", error);
    throw error;
  }
};

const getUsers = async () => {
  try {
    const response = await axiosInstance.get("/");
    return response.data;
  } catch (error) {
    console.log("Error fetching user", error);
    throw error;
  }
};
export { loginService, newRegister, getUsers };
