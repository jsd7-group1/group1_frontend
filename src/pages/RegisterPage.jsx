import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { newRegister } from "../services/userService";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    file: null,
  });

  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full name is required!";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid!";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required!";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password should be at least 8 character!";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Password not match!";
    }

    // if (
    //   formData.file &&
    //   !["image/jpeg", "image/png"].includes(formData.file.type)
    // ) {
    //   validationErrors.file =
    //     "Invalid file type! Only JPEG and PNG are allowed.";
    // }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await newRegister(
          formData.email,
          formData.fullName,
          formData.password,
          formData.confirmPassword
        );
        alert("Register Successfully!");
        navigate("/");
      } catch (error) {
        console.log("Register Error", error);
        setErrors({ form: "Registration failed. Please try again." });
      }
    }
  };

  return (
    <div className="h-screen">
      <section className="h-screen">
        <div className="h-screen bg-gradient-to-b from-[#A8715C] to-white lg:bg-inherit">
          <div className="flex justify-center">
            <div className="h-screen max-w-screen-x m-0 sm:rounded-lg flex items-center justify-center flex-1">
              <div className="h-screen lg:w-5/12 xl:w-7/12 p-6 sm:p-12">
                <div>
                  {/* PHONE LOGO */}
                  <img
                    className="lg:hidden w-10 h-10 mx-auto"
                    src="https://res.cloudinary.com/productpic/image/upload/v1721025668/logo_dg7org.png"
                  />
                  {/* PC LOGO */}
                  <div className="flex justify-center">
                    <img
                      className="hidden lg:block w-10 h-10 mx-auto"
                      src="https://res.cloudinary.com/productpic/image/upload/v1721025668/logo_dg7org.png"
                    />
                  </div>
                </div>
                {/* PHONE PICTURE */}
                <div className="mt-4 flex flex-col items-center">
                  <img
                    className="lg:hidden rounded-3xl w-85 h-65"
                    src="https://res.cloudinary.com/productpic/image/upload/v1721025631/Register-phone_dw94m2.jpg"
                  />
                  <h1 className="pt-4 text-2xl xl:text-3xl font-extrabold">
                    Register
                  </h1>
                  {/*  */}
                  {/* INFORMATION INPUT  */}
                  {/*  */}
                  <form onSubmit={handleSubmit} className="w-full flex-1 mt-8">
                    <div className="mx-auto max-w-sm">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        placeholder="Email"
                      />
                      {errors.email && <span>{errors.email}</span>}
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        name="fullName"
                        type="text"
                        onChange={handleChange}
                        placeholder="Full name"
                      />
                      {errors.fullName && <span>{errors.fullName}</span>}
                      <div className="flex justify-between items-center w-full rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
                        <input
                          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:bg-gray-100"
                          name="password"
                          type={visible ? "password" : "text"}
                          onChange={handleChange}
                          placeholder="Password"
                        />
                        <div
                          className="pr-6"
                          onClick={() => setVisible(!visible)}
                        >
                          {visible ? <FaEye /> : <FaEyeSlash />}{" "}
                        </div>
                      </div>
                      {errors.password && <span>{errors.password}</span>}
                      <div className="flex justify-between items-center w-full rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
                        <input
                          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:bg-gray-100"
                          name="confirmPassword"
                          type={visible2 ? "password" : "text"}
                          onChange={handleChange}
                          placeholder="Confirm Password"
                        />
                        <div
                          className="pr-6"
                          onClick={() => setVisible2(!visible2)}
                        >
                          {visible2 ? <FaEye /> : <FaEyeSlash />}{" "}
                        </div>
                      </div>
                      {errors.confirmPassword && (
                        <span>{errors.confirmPassword}</span>
                      )}
                      <label
                        className="block mb-2 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file"
                      >
                        Upload file(optional)
                      </label>
                      <input
                        className="block w-full rounded-md py-1 text-sm text-gray-900 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                        name="file"
                        type="file"
                        onChange={handleChange}
                      />
                      {errors.file && <span>{errors.file}</span>}
                      <p className="text-gray-900 mt-4 flex flex-row gap-1.5">
                        {" "}
                        Already registered?{" "}
                        <Link to="/login">
                          <div className="text-sm text-blue-500 -200 hover:underline mt-0.5">
                            Login
                          </div>
                        </Link>
                      </p>
                      {/* change from box to icon */}
                      <button
                        className="mt-5 tracking-wide font-semibold bg-[#A8715C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#89583f] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        onClick={handleSubmit}
                      >
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
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-3">
                          <div>Sign up</div>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/*  */}
              {/* RIGHT SIDE */}
              <div className="flex-1 bg-gradient-[#A8715C] to-white h-full justify-center items-center hidden lg:flex">
                <img
                  src="https://res.cloudinary.com/productpic/image/upload/v1721025632/Register-pc_whpeem.jpg"
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

export default RegisterPage;
