import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Plus from "../assets/Allpd-icon/Icon Plus.svg"
import Minus from "../assets/Allpd-icon/Icon Minus.svg"
import Americano from "../assets/allpd-images/americano.jpg"
import Darkchoc from '../assets/allpd-images/darkchoc.jpg'
import Malty from '../assets/allpd-images/maltydelight.jpg'

const MockItem = [
  {
    id:1,
    name:"Coffee1",
    type:"Cold",
    price:70,
    quantity:1,
    image:Americano,
  },
  {
    id:2,
    name:"Coffee2",
    type:"Hot",
    price:55,
    quantity:1,
    image:Darkchoc,
  },
  {
    id:3,
    name:"Coffee3",
    type:"Frappe",
    price:120,
    quantity:1,
    image:Malty,
  },
  
]
const CartPage = () => {
  const [items,setItems] = useState(MockItem);
  const [total,setTotal] = useState(0);
  const [vat,setVat] = useState(0);
  const [orderTotal,setOrderTotal] = useState(0);
  const [purchaseDate,setPurchaseDate] = useState('');
  
  useEffect(() => {
    const newTotal = calculateTotal(items);
    const newVat = newTotal * 0.07;
    const newOrderTotal = newTotal + newVat;

    setTotal(newTotal);
    setVat(newVat);
    setOrderTotal(newOrderTotal);
    const currentDate = new Date();
    setPurchaseDate(currentDate.toLocaleDateString());
  }, [items]);

  const deleteItem = (itemID) =>{
    setItems(items.filter(item => item.id !== itemID))
  }
  const calculateTotal = (item) => {
   return item.reduce((total,item)=>total + item.price * item.quantity,0)
  }
  const incrementQuantity = (itemID) => {
    setItems(items.map(item => item.id === itemID ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (itemID) => {
    setItems(items.map(item => item.id === itemID && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  return (
    <div className='md:flex flex-col md:h-screen '>
        <section className="md:p-[72px]  bg-[#e5dfd6]  ">
          <div className="w-full bg-[#FFF9F0] md:px-10 md:py-8 p-6 rounded-3xl shadow-2xl shadow-[#897979]">
            <div className=" pb-8 flex justify-center md:inline-block">
              <h1 className="font-semibold text-2xl  md:text-4xl ">Shopping Cart</h1>
            </div>
            <div className='md:overflow-y'>
              <div className="md:flex md:mt-10 md:mb-5 border-b-4  hidden">
                <h3 className="font-bold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-bold text-center text-gray-600 text-xs uppercase w-1/5 r">
                  Quantity
                </h3>
                <h3 className="font-bold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Price
                </h3>
                <h3 className="font-bold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Total
                </h3>
              </div>
              {items.map(item => (
                <div key={item.id} className="flex items-center md:bg-[#FFF9F0] bg-[#e5dfd6] hover:bg-gray-100 -mx-8 px-6 py-5 border-b-2">
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={item.image} alt="" />
                    </div>
                    <div className="flex flex-col  ml-4 flex-grow">
                      <span className="font-bold text-sm">{item.name}</span>
                      <span className="text-red-500 text-xs">TYPE:{item.type}</span>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <img src={Minus} alt="minus" onClick={()=> decrementQuantity(item.id)} />
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      Value={item.quantity}
                    />
                    <img src={Plus} alt="plus"  onClick={()=> incrementQuantity(item.id)}  />
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">${item.price}</span>
                  <span className="text-center w-1/5 font-semibold text-sm">${item.price * item.quantity}</span>
                  <button onClick={()=> deleteItem(item.id)} className='bg-red-500  text-xl font-bold rounded-md py-10 md:px-[3px] px-2'>–</button>
                </div>
              ))}
            </div>
            <div className="md:p-12 flex justify-between  w-full">
              <Link to="/allProduct" className="hidden md:inline-block w-1/2">
                <a className='text-red-500 hover:text-red-700 font-bold'>
                  ⇦Continue Shopping
                </a>
              </Link>
              <div className="md:p-1 md:w-1/2 w-full ">
                <div className="md:flex md:justify-end items-center md:mt-8 mt-2 flex justify-between">
                  <span className=" text-gray-600 mr-4">Vat(7%):</span>
                  <span className="font-bold">${vat.toFixed(2)}</span>
                </div>
                <div className="md:flex md:justify-end items-center md:mt-8 mt-2 flex justify-between">
                  <span className="text-gray-600 mr-4">Order Total:</span>
                  <span className="font-bold">${orderTotal.toFixed(2)}</span>
                </div>
                <div className="md:flex md:justify-end items-center md:mt-8 mt-2 flex justify-between">
                  <span className="text-gray-600 mr-4">Purchase Date:</span>
                  <span className="font-bold">{purchaseDate}</span>
                </div>
                <Link to="/payment" className="md:flex md:justify-end md:mt-8 mt-8 ">
                  <button
                    className="md:px-12 md:py-4 p-4 rounded-md text-white bg-[#897979]  hover:bg-[#00C9CB] md:w-1/2 w-full text-xl"
                  >
                    CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default CartPage