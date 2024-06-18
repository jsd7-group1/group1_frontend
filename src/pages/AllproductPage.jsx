// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Allicon from "../assets/Allpd-icon/all.png";
import Breadicon from "../assets/Allpd-icon/bread.png";
import Coldicon from "../assets/Allpd-icon/cold.png";
import Hoticon from "../assets/Allpd-icon/hot.png";
import Plus from "../assets/Allpd-icon/Icon Plus.svg";
import Minus from "../assets/Allpd-icon/Icon Minus.svg";
import Buy from "../assets/Allpd-icon/Buy.svg";
import allProduct from "../assets/allpd-images/Allpd-images.js";

const AllproductPage = () => {
  return (
    <>
      {/* ### All product ### */}
      <div
        className="bg-no-repeat bg-cover bg-left bg-fixed"
        style={{
          backgroundImage:
            "url(https://img5.pic.in.th/file/secure-sv1/productb98c8ecaa4907e61.png)",
        }}
      >
        <NavBar />
        <header className="flex flex-col w-full h-full pb-[82px]">
          <div className="flex flex-col">
            <p className="text-center text-[54px] pt-4 text-[#524A4A] font-bold">
              Our Awesome Drinks
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-center pb-10 text-[24px] text-[#887979]">
              Indulging in the smooth, velvety texture and
              <br />
              the symphony of flavors that dance on my palate.
            </p>
          </div>
          <div className="flex flex-col">
            <article className="text-center flex align-item-center justify-center gap-[18px] lg:gap-[268px] pb-10 text-[16px] lg:text-[20px] text-[#887979]">
              <div className="flex items-center justify-center rounded-[10px] shadow-2xl bg-[#726464] w-[192px] h-[58px] text-[#000000] hover:bg-[#F5F5F5]">
                <p className="text-[22px] px-1">All</p>
                <img src={Allicon} className="w-10 h-10" />
              </div>
              <div className="flex items-center justify-center rounded-[10px] shadow-2xl bg-[#726464] w-[192px] h-[58px] text-[#000000] hover:bg-[#F5F5F5]">
                <p className="text-[22px] px-1">Bakery</p>
                <img src={Breadicon} className="w-10 h-10" />
              </div>
              <div className="flex items-center justify-center rounded-[10px] shadow-2xl bg-[#726464] w-[192px] h-[58px] text-[#000000] hover:bg-[#F5F5F5]">
                <p className="text-[22px] px-1">Hot Coffees</p>
                <img src={Hoticon} className="w-10 h-10" />
              </div>
              <div className="flex items-center justify-center rounded-[10px] shadow-2xl bg-[#726464] w-292px] h-[58px] text-[#000000] hover:bg-[#F5F5F5]">
                <p className="text-[22px] px-1">Cold Coffees</p>
                <img src={Coldicon} className="w-10 h-10" />
              </div>
            </article>
          </div>
          <section className="flex flex-row gap-[10px] px-[10px] flex-wrap">
            {/* Product Item */}
            {/* ROW-1 Desktop */}
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.iceflatwhite} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-1 flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Ice Flat White</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>Ristretto shot finished with milk and iced.</span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : COLD
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        160.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="w-full overflow-hidden rounded-md">
                    <img src={allProduct.iceclassicchoc} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-1 flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Iced Classic Chocolate</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      Chocolate sauce with milk and ice topped with whipped
                      cream and chocolate sauce.
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : COLD
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        135.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.maltydelight} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-1 flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Malty Chocolate Latte</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      Espresso with Malt Cocoa beverage powder, Nut Malt powder
                      and milk. Topped with whipped cream
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : HOT
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        160.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ROW-2 Desktop */}
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.mochafrap} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Mocha Frappuccino</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      Coffee with rich mocha sauce blended with milk and ice.
                      Topped with whipped cream.
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : COLD
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        160.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.americano} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Americano</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>Rich espresso and pure water poured over ice. </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : COLD
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        135.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.darkchoc} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Dark Chocolate Mocha</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      This Dark Chocolate Mocha is smooth, creamy, and easy to
                      make on the stovetop.
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : HOT
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        145.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row-3 Desktop */}
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.cafemocha} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Cafe Mocha</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      Espresso shot, mocha sauce, milk and whipped cream.
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : HOT
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        160.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.brewedcoffee} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Brewed Coffee</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>Coffee and hot water with simply drip-brewed. </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : HOT
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        130.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.expressoconpana} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Expresso Con panna</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>a dollop of whipped cream </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : HOT
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        115.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row-4 Desktop */}
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.caramelmacchiato} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Caramel Macchiato</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      Milk, vanilla syrup espresso shot and caramel drizzles.
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : HOT
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        170.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.yuzucoldbrew} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Yuzu Cold Brew</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      (Thailand Exclusive) The perfectly balanced of Starbucks
                      Cold Brew
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : COLD
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        150.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.shot} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Add-Ons</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>An intense, full-flavored espresso. </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      ADD - ONS
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        85.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row-5 desktop*/}
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.strawberrytart} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Strawberry Tart</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      Finest almond-rich frangipane cream generously with hand
                      placed strawberries.
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      BAKERY
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        145.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img
                      src={allProduct.myrtilluscheesecake}
                      className="block"
                    />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Myrtillus Cheese cake</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      Creamy cheesecake swirled with tangy blueberry compote
                      atop a buttery graham cracker crust.
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      BAKERY
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        125.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.prunus} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Prunus dulcis Croissant</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      Flaky croissant filled with sweet almond paste, topped
                      with sliced almonds.
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      BAKERY
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        90.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row-6 desktop*/}
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.softoatmilk} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Soft Oatmeal Raisin Cookie</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>
                      Ristretto shot finished with A Chewy cookie with rolled
                      oats and Raisins
                    </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      BAKERY
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        65.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.custardcream} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Custard Cream, Mochi Waffle</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>Custard Cream, Mochi Waffle. </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      BAKERY
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        65.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]">
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img src={allProduct.JumboSausage} className="block" />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-[7] flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>Jumbo Sausage Bite</h3>
                    <div>
                      <img src={Buy} className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>Puff pastry with jumbo pork sausage. </span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      BAKERY
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        95.-
                      </h3>
                    </div>
                    {/*finish price*/}
                    <div className="flex items-center gap-2">
                      <img src={Minus} className="w-6 h-6 cursor-grab" />
                      <h3 className="text-[18px]">0</h3>
                      <img src={Plus} className="w-6 h-6 cursor-grab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
      <Footer />
    </>
  );
};

export default AllproductPage;
