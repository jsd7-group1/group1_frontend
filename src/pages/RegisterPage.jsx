// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
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

    if (
      formData.file &&
      !["image/jpeg", "image/png"].includes(formData.file.type)
    ) {
      validationErrors.file =
        "Invalid file type! Only JPEG and PNG are allowed.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Register successfully ");
      navigate("/home");
    }
  };

  return (
    <section className="h-screen">
      <div className="h-2/5 bg-[#A8715C] lg:bg-inherit">
        <div className="min-h-screen  flex justify-center">
          <div className="max-w-screen-x m-0 sm:rounded-lg flex items-center justify-center flex-1">
            <div className="lg:w-5/12 xl:w-7/12 p-6 sm:p-12">
              <div>
                {/*  */}
                {/* PHONE LOGO */}
                <img
                  className="lg:hidden w-10 h-10 mx-auto"
                  src="src\assets\images\navbar-icons\logo.png"
                />
                {/*  */}
                {/* PC LOGO */}
                <div className="flex justify-center">
                  <img
                    className="hidden lg:block w-10 h-10 mx-auto"
                    src="src\assets\images\navbar-icons\logo.png"
                  />
                </div>
              </div>
              {/* PHONE PICTURE */}
              <div className="mt-4 flex flex-col items-center">
                <img
                  className="lg:hidden rounded-3xl w-85 h-65"
                  src="src\assets\images\log-in\Register-phone.jpg"
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
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      placeholder="Password"
                    />
                    {errors.password && <span>{errors.password}</span>}
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      name="confirmPassword"
                      type="password"
                      onChange={handleChange}
                      placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && (
                      <span>{errors.confirmPassword}</span>
                    )}
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="file"
                    >
                      Upload file
                    </label>
                    <input
                      className="block w-full py-1 text-sm text-gray-900 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                      name="file"
                      type="file"
                      onChange={handleChange}
                    />
                    {errors.file && <span>{errors.file}</span>}
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
            <div className="flex-1 bg-[#A8715C] h-full justify-center items-center hidden lg:flex">
              <img
                src="src\assets\images\log-in\Register-pc.jpg"
                className="rounded-full w-145 h-145"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
