import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <section className="h-screen">
      <div className="h-2/5 bg-[#A8715C] lg:bg-inherit">
        {/* SOURCE:https://codepen.io/owaiswiz/pen/jOPvEPB */}
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
                <div className="w-full flex-1 mt-8">
                  <div className="mx-auto max-w-sm">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Full name"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Re-enter Password"
                    />
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="file_input"
                    >
                      Upload file
                    </label>
                    <input
                      className="block w-full py-1 text-sm text-gray-900 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                    />
                    <Link to="/home">
                      <button className="mt-5 tracking-wide font-semibold bg-[#A8715C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#89583f] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-3">
                          <div>Sign up</div>
                        </span>
                      </button>
                    </Link>
                    <p />
                  </div>
                </div>
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
