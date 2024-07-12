import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { menu, close } from 'ionicons/icons';
import Logo from "../assets/images/navbar-icons/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for token in local storage
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setIsLoggedIn(false);
    setMenuOpen(false); // Close the menu after logout
  };

  return (
    <>
      <div>
        <div className="bg-transparent">
          <div className="font-[Roboto] flex justify-between items-center w-[95%] mx-auto bg-transparent">
            <div className="flex items-center">
              <Link to="/">
                <img className="w-6" src={Logo} alt="logo" />
              </Link>
              <p className="font-sans font-bold text-3xl text-black select-none">potioncafe</p>
            </div>

            <div
              className={`nav-links z-10 duration-500 absolute bg-[#f4f4f4] bg-opacity-80 md:bg-opacity-80 hover:bg-opacity-100 md:m-2 md:left-auto md:right-2 top-[-100%] left-3 right-3 md:w-[20%] w-full flex justify-center md:justify-end items-center p-8 rounded-xl drop-shadow-md ${menuOpen ? 'top-[11%]' : ''}`}
            >
              <ul className="select-none flex flex-col md:justify-evenly items-center md:gap-[2vw] gap-3 text-slate-600 font-light font-sans p-2">
                <li>
                  <Link className="hover:text-gray-500" to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-500" to="/allProduct" onClick={() => setMenuOpen(false)}>
                    Menu
                  </Link>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link className="hover:text-gray-500" to="/cart" onClick={() => setMenuOpen(false)}>
                        Cart
                      </Link>
                    </li>
                    <li>
                      <button className="hover:text-gray-500" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="hover:text-gray-500" to="/login" onClick={() => setMenuOpen(false)}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-500" to="/register" onClick={() => setMenuOpen(false)}>
                        Don't have an account?/Sign up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <div className="flex px-8 group">
                  <div className="ease-in-out duration-1000 group-hover:w-full group-focus-within:w-full group-focus-within:bg-slate-200 bg-opacity-80 flex items-center justify-between w-0 rounded-full shadow-xl p-1.5 sticky">
                    <button className="invisible group-hover:visible group-focus-within:visible ease-linear duration-500 opacity-40 group-hover:opacity-100 group-focus-within:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-9 h-9" viewBox="0 0 512 512">
                        <title>Close Circle</title>
                        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
                      </svg>
                    </button>

                    <input
                      className="font-sans opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 invisible group-hover:visible group-focus-within:visible ease-in-out duration-700 rounded-full w-full h-9 py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                      type="text"
                      placeholder="Search the menu"
                    />

                    <button className="-ml-11 group-hover:ml-auto group-focus-within:ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="ionicon h-9 w-9" viewBox="0 0 512 512">
                        <title>Search Circle</title>
                        <path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm91.31 283.31a16 16 0 01-22.62 0l-42.84-42.83a88.08 88.08 0 1122.63-22.63l42.83 42.84a16 16 0 010 22.62z" />
                        <circle cx="232" cy="232" r="56" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <Link to="/cart">
                <img src="../assets/images/navbar-icons/cart.png" alt="cart" className="nav_cart cursor-pointer h-7" />
              </Link>

              <div className="flex items-center gap-6">
                <IonIcon icon={menuOpen ? close : menu} onClick={onToggleMenu} className="text-3xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet /><br />
    </>
  );
};

export default NavBar;
