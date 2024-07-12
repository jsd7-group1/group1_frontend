import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Allicon from "../assets/Allpd-icon/all.png";
import Breadicon from "../assets/Allpd-icon/bread.png";
import Coldicon from "../assets/Allpd-icon/cold.png";
import Hoticon from "../assets/Allpd-icon/hot.png";
import Plus from "../assets/Allpd-icon/Icon Plus.svg";
import Minus from "../assets/Allpd-icon/Icon Minus.svg";
import Buy from "../assets/Allpd-icon/Buy.svg";
import { fetchProduct, productByCategory } from "../services/productService";

const AllProductPage = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");


  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await fetchProduct()
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching data",error);
      }
    }
    fetchData();
  },[]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (filter === "all") {
  //         const response = await fetchProduct();
  //         setProducts(response.data);
  //       } else {
  //         const response = await productByCategory(filter);
  //         setProducts(response.data);
  //       }
  //     } catch (error) {
  //       console.log("Error fetching data", error);
  //     }
  //   };
  //   fetchData();
  // }, [filter]);

  const handleFilterChange = (categoryID) => {
    setFilter(categoryID);
  };
  const filteredProducts = filter === "all"
  ? products
  : products.filter((product) => product.categoryID.categoryName === filter);

  return (
    <div className="h-screen">
      <div
        className="bg-no-repeat bg-cover bg-left bg-fixed h pb-6"
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
              <button
                onClick={() => handleFilterChange("all")}
                className="flex items-center justify-center rounded-[10px] shadow-2xl bg-[#726464] w-[192px] h-[58px] text-[#000000] hover:bg-[#F5F5F5]"
              >
                <p className="text-[22px] px-1">All</p>
                <img src={Allicon} className="w-10 h-10" alt="All" />
              </button>
              <button
                onClick={() => handleFilterChange("bakery")}
                className="flex items-center justify-center rounded-[10px] shadow-2xl bg-[#726464] w-[192px] h-[58px] text-[#000000] hover:bg-[#F5F5F5]"
              >
                <p className="text-[22px] px-1">Bakery</p>
                <img src={Breadicon} className="w-10 h-10" alt="Bakery" />
              </button>
              <button
                onClick={() => handleFilterChange("hot")}
                className="flex items-center justify-center rounded-[10px] shadow-2xl bg-[#726464] w-[192px] h-[58px] text-[#000000] hover:bg-[#F5F5F5]"
              >
                <p className="text-[22px] px-1">Hot Coffees</p>
                <img src={Hoticon} className="w-10 h-10" alt="Hot Coffees" />
              </button>
              <button
                onClick={() => handleFilterChange("cold")}
                className="flex items-center justify-center rounded-[10px] shadow-2xl bg-[#726464] w-[192px] h-[58px] text-[#000000] hover:bg-[#F5F5F5]"
              >
                <p className="text-[22px] px-1">Cold Coffees</p>
                <img src={Coldicon} className="w-10 h-10" alt="Cold Coffees" />
              </button>
            </article>
          </div>
        </header>

        <section className="flex flex-row gap-[10px] px-[10px] flex-wrap">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="w-full lg:w-[calc((100vw_-_30px)_/_2)] 2xl:w-[calc((100vw_-_60px)_/_3)]"
            >
              <div className="flex bg-white hover:bg-[#efedea] p-3 gap-2 rounded-[18px] cursor-pointer h-full">
                {/*left*/}
                <div className="max-w-[200px] max-h-[200px]">
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <img
                      src={product.imgUrl}
                      alt={product.productName}
                      className="block"
                    />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-1 flex flex-col text-[16px]">
                  <div className="flex justify-between text-[22px]">
                    <h3>{product.productName}</h3>
                    <div>
                      <Link to="/cart">
                        <img
                          src={Buy}
                          className="w-6 h-6 cursor-pointer"
                          alt="Buy"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 text-[14px] text-[#979797]">
                    <span>{product.description}</span>
                    <button className="block mt-5 text-[13px] font-bold rounded-[12px] bg-gray-100 w-[102px] h-[28px] text-[#00623B] hover:bg-[#DAC6B6]">
                      TYPE : {product.categoryID.categoryName}
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-2 text-[12px] font-bold">
                      <h3 className="text-[22px] pt-3 font-bold text-[#DD9776]">
                        {product.price}.-
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={Minus}
                        className="w-6 h-6 cursor-pointer"
                        alt="Minus"
                        onClick={() => removeFromCart(product.id)}
                      />
                      <h3 className="text-[18px]">
                        {product.quantity}
                      </h3>
                      <img
                        src={Plus}
                        className="w-6 h-6 cursor-pointer"
                        alt="Plus"
                        onClick={() => addToCart(product)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AllProductPage;
