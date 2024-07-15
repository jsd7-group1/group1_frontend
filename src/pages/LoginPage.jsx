/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { loginService } from "../services/userService";


function LoginPage() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required!";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await loginService( formData.email, formData.password );
        console.log("Login successful");
        navigate("/")
      } catch (error) {
        console.log(error);
        alert("Login failed");
        throw error;
      }
    }
  };

  return (
    <div className="h-screen">
      <section className="h-screen">
        <div className="h-screen bg-gradient-to-b from-[#A8715C] to-white lg:bg-inherit">
          <div className="min-h-screen  flex justify-center">
            <div className="max-w-screen-x m-0 sm:rounded-lg flex items-center justify-center flex-1">
              <div className="lg:w-5/12 xl:w-7/12 p-6 sm:p-12">
                <div>
                  {/*  */}
                  {/* PHONE LOGO */}
                  <img
                    className="lg:hidden w-10 h-10"
                    src="https://res.cloudinary.com/productpic/image/upload/v1721025668/logo_dg7org.png"
                  />
                  {/*  */}
                  {/* PC LOGO */}
                  <div className="flex justify-center">
                    <img
                      className="hidden lg:block w-10 h-10"
                      src="https://res.cloudinary.com/productpic/image/upload/v1721025668/logo_dg7org.png"
                    />
                  </div>
                </div>
                <div className="w-full mt-4 flex flex-col items-center">
                  <img
                    className="lg:hidden rounded-2xl w-85 h-65"
                    src="src\assets\images\log-in\Login-phone.png"
                  />
                  <h1 className="text-2xl pt-4 xl:text-3xl font-extrabold">
                    Login
                  </h1>
                  {/*  */}
                  {/* INFORMATION INPUT  */}
                  {/*  */}
                  <form onSubmit={handleSubmit} className="w-full flex-1 mt-8">
                    <div className="mx-auto max-w-sm">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Email"
                      />
                      {errors.email && <span>{errors.email}</span>}
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Password"
                        required=""
                      />
                      {errors.password && <span>{errors.password}</span>}
                      <p className="text-gray-900 mt-4 flex flex-row gap-1.5">
                        {" "}
                        Don't have an account?{" "}
                        <Link to="/register">
                          <div className="text-sm text-blue-500 -200 hover:underline mt-0.5">
                            Sign-up
                          </div>
                        </Link>
                      </p>
                          {/* check box for remember me  */}
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="mt-5 tracking-wide font-semibold bg-[#A8715C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#89583f] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        >
                          {/*  */}
                          <svg
                            className="w-6 h-6 -ml-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="8.5" cy={7} r={4} />
                          </svg>
                          <span className="ml-3">
                            <div> Sign In</div>{" "}
                          </span>
                        </button>
                      <p />
                    </div>
                  </form>
                </div>
              </div>
              {/*  */}
              {/* RIGHT SIDE */}
              <div className="flex-1 bg-gradient-[#A8715C] to-white h-screen justify-center items-center hidden lg:flex">
                <img
                  src="src\assets\images\log-in\Login-pc.jpg"
                  className="rounded-full w-145 h-145"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LoginPage;
