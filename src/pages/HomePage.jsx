import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Herobg from "../assets/images/hero/herobackground.png";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
      {/*HERO SECTION*/}
      {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
      <header>
        {/* Hero Background */}
        <section
          className="flex flex-col min-h-screen bg-slate-800 bg-center bg-cover  bg-fixed bg-black/30"
          style={{
            backgroundImage: `url(${Herobg})`,
          }}
        >
          <Navbar />
          {/*********************************/}
          {/*SLOGAN SECTION*/}
          {/*********************************/}
          {/* Slogan Section Content */}
          <div className="flex-1 flex justify-start mt-20">
            <div className="text-center mx-auto">
              <h1 className="text-7xl font-semibold text-[#655050] select-none">
                Exquisite Brews
              </h1>
              <p className="text-7xl font-semibold mt-1 text-[#808080] select-none">
                Expertly Crafted
              </p>
              <a
                className="px-5 py-2 inline-block bg-[#f4f4f4] bg-opacity-50 border border-[#000000] text-[#655050] text-block hover:bg-[#f4f4f4] transition-colors my-10 rounded-full hover:drop-shadow-md duration-300 ease-in-out"
                href="#Recommendation"
              >
                Our Signature ↓
              </a>
            </div>
          </div>
        </section>
        {/*********************************/}
        {/*END THE SLOGAN SECTION*/}
        {/*********************************/}
      </header>
      {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
      {/*END THE HERO SECTION*/}
      {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
      {/*/////////////////////////////////*/}
      {/*Product HIGHTLIGHTS Desktop SECTION*/}
      {/*/////////////////////////////////*/}
      <section className="hidden md:block section p-10">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className=" text-center p-4 border border-black transition duration-300 ease-in-out cursor-pointer hover:bg-[#655050] hover:text-white">
              <p>All Drinks</p>
            </div>
            <div className=" text-center p-4 border border-black transition duration-300 ease-in-out cursor-pointer hover:bg-[#655050] hover:text-white">
              <p>Hot Drinks</p>
            </div>
            <div className=" text-center p-4 border border-black transition duration-300 ease-in-out cursor-pointer hover:bg-[#655050] hover:text-white">
              <p>Cold Drinks</p>
            </div>
            <div className=" text-center p-4 border border-black transition duration-300 ease-in-out cursor-pointer hover:bg-[#655050] hover:text-white">
              <p>Add-Ons</p>
            </div>
          </div>
          <div>
            <div
              id="dropdown-button"
              onClick={toggleDropdown}
              className="select-none border border-gray-400 rounded px-5 py-2 cursor-pointer flex justify-between"
            >
              Sort By
            </div>
            {isOpen && (
              <div
                id="dropdown-menu"
                className="z-10 absolute top-50 w-400 border border-gray-300 bg-white shadow-md mt-2"
              >
                <div
                  id="dropdown-popular"
                  className="py-4 px-4 cursor-pointer hover:bg-gray-100"
                >
                  Popular
                </div>
                <div
                  id="dropdown-price"
                  className="py-4 px-4 cursor-pointer hover:bg-gray-100"
                >
                  Price
                </div>
                <div
                  id="dropdown-newest"
                  className="py-4 px-4 cursor-pointer hover:bg-gray-100"
                >
                  Newest
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Swiper */}
        <div className="grid grid-cols-4 gap-4 pt-12">
          <div className="">
            <div className="card_top relative">
              <img
                src="./assets/images/hero/Coffee.png"
                alt=""
                className="card_img"
              />
              <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-black px-2 py-1 font-semibold rounded">
                Hot
              </div>
            </div>
            <div className="card_body mt-4">
              <h3 className="card_title text-lg font-semibold">Menu1</h3>
              <p className="card_price text-primary">$120</p>
              <div className="card_ratings flex items-center">
                <div className="card_stars flex space-x-1">
                  <a href="#">
                    <img
                      src="../assets/images/navbar-icons/cart.png"
                      alt=""
                      className="nav_cart cursor-pointer h-7"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card_top relative">
              <img
                src="./assets/images/hero/Coffee.png"
                alt=""
                className="card_img"
              />
              <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-black px-2 py-1 font-semibold rounded">
                Hot
              </div>
            </div>
            <div className="card_body mt-4">
              <h3 className="card_title text-lg font-semibold">Menu2</h3>
              <p className="card_price text-primary">$120</p>
              <div className="card_ratings flex items-center">
                <div className="card_stars flex space-x-1">
                  <a href="#">
                    <img
                      src="../assets/images/navbar-icons/cart.png"
                      alt=""
                      className="nav_cart cursor-pointer h-7"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card_top relative">
              <img
                src="./assets/images/hero/Coffee.png"
                alt=""
                className="card_img"
              />
              <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-black px-2 py-1 font-semibold rounded">
                Hot
              </div>
            </div>
            <div className="card_body mt-4">
              <h3 className="card_title text-lg font-semibold">Menu3</h3>
              <p className="card_price text-primary">$120</p>
              <div className="card_ratings flex items-center">
                <div className="card_stars flex space-x-1">
                  <a href="#">
                    <img
                      src="../assets/images/navbar-icons/cart.png"
                      alt=""
                      className="nav_cart cursor-pointer h-7"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card_top relative">
              <img
                src="./assets/images/hero/Coffee.png"
                alt=""
                className="card_img"
              />
              <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-black px-2 py-1 font-semibold rounded">
                Hot
              </div>
            </div>
            <div className="card_body mt-4">
              <h3 className="card_title text-lg font-semibold">Menu4</h3>
              <p className="card_price text-primary">$120</p>
              <div className="card_ratings flex items-center">
                <div className="card_stars flex space-x-1">
                  <a href="#">
                    <img
                      src="../assets/images/navbar-icons/cart.png"
                      alt=""
                      className="nav_cart cursor-pointer h-7"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/////////////////////////////////*/}
      {/*End the Product HIGHTLIGHTS Desktop SECTION*/}
      {/*/////////////////////////////////*/}
      {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
      {/*Product HIGHTLIGHTS Mobile SECTION*/}
      {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
      <section className="md:hidden flex flex-col items-center pt-4">
        <h1 className="text-center font-semibold text-xl pt-7 text-[#655050]">
          OUR DRINKS
        </h1>
        <h2 className="text-center font-semibold text-2xl">
          Check Out Some Of Them
        </h2>
        <div className="pt-6">
          <div className="card_top relative">
            <img
              src="./assets/images/hero/Coffee.png"
              alt=""
              className="card_img"
            />
            <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-black px-2 py-1 font-semibold rounded">
              Hot
            </div>
          </div>
          <div className="card_body mt-4">
            <h3 className="card_title text-lg font-semibold">Menu1</h3>
            <p className="card_price text-primary">$120</p>
            <div className="card_ratings flex items-center">
              <div className="card_stars flex space-x-1">
                <a href="#">
                  <img
                    src="../assets/images/navbar-icons/cart.png"
                    alt=""
                    className="nav_cart cursor-pointer h-7"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="card_top relative">
            <img
              src="../assets/images/hero/Coffee.png"
              alt=""
              className="card_img"
            />
            <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-black px-2 py-1 font-semibold rounded">
              Hot
            </div>
          </div>
          <div className="card_body mt-4 pb-4">
            <h3 className="card_title text-lg font-semibold">Menu2</h3>
            <p className="card_price text-primary">$120</p>
            <div className="card_ratings flex items-center">
              <div className="card_stars flex space-x-1">
                <a href="#">
                  <img
                    src="../assets/images/navbar-icons/cart.png"
                    alt=""
                    className="nav_cart cursor-pointer h-7"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="px-5 py-2 inline-block bg-[#f4f4f4] bg-opacity-50 border border-[#000000] text-[#655050] text-block hover:bg-[#f4f4f4] transition-colors my-10 hover:drop-shadow-md duration-300 ease-in-out"
          href="#"
        >
          Or See More Menu ➜
        </a>
      </section>
      {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
      {/*End the Product HIGHTLIGHTS Mobile SECTION*/}
      {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
      {/*********************************/}
      {/*RECOMMENDATION SECTION*/}
      {/*********************************/}
      <section id="Recommendation" className="bg-[#FCFAFA] min-h-screen">
        <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
          <div className="mb-14 md:mb-0 lg:w-1/2">
            <h1 className="max-w-xl font-sans text-[2.9rem] leading-none text-gray-900 font-semibold text-center md:text-4xl md:text-left md:leading-tight mb-5 select-none">
              Crafted with Passion, Brewed to Perfection.
            </h1>
            <p className="max-w-xl text-center text-gray-500 md:text-left md:max-w-md font-sans select-none">
              Our <strong>Signature Coffee</strong> is more than just a
              beverage; it's an experience crafted by our passionate baristas
              who blend expertise with artistry to bring you the finest brews.
              Each cup tells a story of dedication and skill, ensuring that
              every sip is a moment to savor. Join us on a journey of flavor and
              indulge in the essence of excellence with{" "}
              <strong>Signature Coffee</strong>.
            </p>
            <div className="flex justify-center mt-10 md:justify-start gap-6">
              <Link to="/allProduct">
              <div className="text-white bg-[#655050] font-medium  px-5 py-4 text-center hover:bg-white hover:text-[#655050] border-2 border-[#655050] hover:drop-shadow-md transition duration-300 ease-in-out">
                Order Now ➜
              </div>
              </Link>
              <a
                href="#"
                className="text-[#655050] bg-transparent font-medium border-2 border-[#655050]  px-5 py-4 text-center  hover:text-[#b0adad] hover:drop-shadow-md transition duration-300 ease-in-out"
              >
                See Your Cart
              </a>
            </div>
          </div>
          <div className="lg:w1/2 py-8">
            <img
              className="h-80"
              src="./assets/images/hero/signatureproduct.svg"
              alt="Signature"
            />
          </div>
        </div>
      </section>
      {/*********************************/}
      {/*END THE RECOMMENDATION SECTION*/}
      {/*********************************/}
      <Footer />
    </>
  );
};

export default HomePage;
