import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Herobg from "../assets/images/hero/herobackground.png";
import GoogleGenerativeAIComponent from "../components/Chatbot";

const HomePage = () => {
  return (
    <>
      {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
      {/*HERO SECTION*/}
      {/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
      <header>
        {/* Hero Background */}
        <section
          className="flex flex-col min-h-screen bg-slate-800 bg-center bg-cover bg-fixed bg-black/30"
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
      {/*SPECIAL FEATURE SECTION*/}
      {/*/////////////////////////////////*/}
      <div className="container mx-auto mt-10">
        <GoogleGenerativeAIComponent />
      </div>
      {/*/////////////////////////////////*/}
      {/*END THE SPECIAL FEATURE SECTION*/}
      {/*/////////////////////////////////*/}
      {/*/////////////////////////////////*/}
      {/*Product HIGHTLIGHTS Desktop SECTION*/}
      {/*/////////////////////////////////*/}
      <section className="hidden md:block section p-10">
        <div className="text-4xl font-semibold">Recommendation</div>
        {/* Swiper */}
        <div className="grid grid-cols-4 gap-4 pt-12">
          <div className="">
            <div className="card_top relative">
              <Link to="/product">
                <img
                  src="https://res.cloudinary.com/productpic/image/upload/v1721031041/caramelmacchiato_vmadbe_azngha.png"
                  alt=""
                  className="card_img"
                />
                <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-white px-2 py-1 font-semibold rounded">
                  Hot
                </div>
              </Link>
            </div>
            <div className="card_body mt-4">
              <Link to="/product">
                <h3 className="card_title text-lg font-semibold">
                  Caramel Macchiato
                </h3>
              </Link>
              <p className="card_price text-primary">฿170</p>
            </div>
          </div>
          <div className="">
            <div className="card_top relative">
              <Link to="/product">
                <img
                  src="https://res.cloudinary.com/productpic/image/upload/v1721031050/iceclassicchoc_dokx3s_nj8nzn.jpg"
                  alt=""
                  className="card_img"
                />
                <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-white px-2 py-1 font-semibold rounded">
                  Cold
                </div>
              </Link>
            </div>
            <div className="card_body mt-4">
              <Link to="/product">
                <h3 className="card_title text-lg font-semibold">
                  Iced Classic Chocolate
                </h3>
              </Link>
              <p className="card_price text-primary">฿135</p>
            </div>
          </div>
          <div className="">
            <div className="card_top relative">
              <Link to="/product">
                <img
                  src="https://res.cloudinary.com/productpic/image/upload/v1721031040/Jumbo-Sausage_o8d6u9_ijzhp5.png"
                  alt=""
                  className="card_img"
                />
                <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-white px-2 py-1 font-semibold rounded">
                  Bakery
                </div>
              </Link>
            </div>
            <div className="card_body mt-4">
              <Link to="/product">
                <h3 className="card_title text-lg font-semibold">
                  Jumbo sausage
                </h3>
              </Link>
              <p className="card_price text-primary">฿95</p>
            </div>
          </div>
          <div className="">
            <div className="card_top relative">
              <Link to="/product">
                <img
                  src="https://res.cloudinary.com/productpic/image/upload/v1721031051/myrtillus-cheese-cake_r6g5sn_etmtxk.png"
                  alt=""
                  className="card_img"
                />
                <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-white px-2 py-1 font-semibold rounded">
                  Bakery
                </div>
              </Link>
            </div>
            <div className="card_body mt-4">
              <Link to="/product">
                <h3 className="card_title text-lg font-semibold">
                  Myrtillus Cheese cake
                </h3>
              </Link>
              <p className="card_price text-primary">฿125</p>
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
            <Link to="/product">
              <img
                src="https://res.cloudinary.com/productpic/image/upload/v1721034256/Yuzu-Cold-Brew_zjqrwt_rohyw4.png"
                alt=""
                className="card_img"
              />
              <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-white px-2 py-1 font-semibold rounded">
                Cold
              </div>
            </Link>
          </div>
          <div className="card_body mt-4">
            <Link to="/product">
              <h3 className="card_title text-lg font-semibold">
                Yuzu cold brew
              </h3>
              <p className="card_price text-primary">฿150</p>
            </Link>
          </div>
        </div>
        <div className="pt-6">
          <div className="card_top relative">
            <Link to="/product">
              <img
                src="https://res.cloudinary.com/productpic/image/upload/v1721034255/prunus_reqyfc_h5wqub.jpg"
                alt=""
                className="card_img"
              />
            </Link>
            <div className="card_tag absolute top-1 left-1 z-10 bg-primary text-white px-2 py-1 font-semibold rounded">
              Bakery
            </div>
          </div>
          <div className="card_body mt-4 pb-4">
            <Link to="/product">
              <h3 className="card_title text-lg font-semibold">
                Prunus dulcis Croissant
              </h3>
              <p className="card_price text-primary">฿90</p>
            </Link>
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
              <Link to="/product">
                <div className="text-white bg-[#655050] font-medium  px-5 py-4 text-center hover:bg-white hover:text-[#655050] border-2 border-[#655050] hover:drop-shadow-md transition duration-300 ease-in-out">
                  Order Now ➜
                </div>
              </Link>
              <Link to="/cart">
                <div className="text-[#655050] bg-transparent font-medium border-2 border-[#655050]  px-5 py-4 text-center  hover:text-[#b0adad] hover:drop-shadow-md transition duration-300 ease-in-out">
                  See Your Cart
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w1/2 py-8">
            <img
              className="h-80"
              src="https://res.cloudinary.com/productpic/image/upload/v1721025686/signatureproduct_jauz9w.png"
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
