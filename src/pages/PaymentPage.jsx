/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import QRcode from '../assets/images/payment/QR.jpg'
import NavBar from '../components/Navbar';
import { fetchUserOrder, checkoutOrder } from '../services/orderService';


const PaymentPage = () => {
  const [order,setOrder] = useState([]);
  const [vat,setVat] = useState(0);
  const [orderTotal,setOrderTotal] = useState(0);
  const [purchaseDate,setPurchaseDate] = useState('');
  const [payment,SetPayment] = useState('card');
  const [customerName,setCustomerName] = useState('');
  const [contact,setContact] = useState('');
  const [city,setCity] = useState('');
  const [house,setHouse] = useState('');
  const [note,setNote] = useState('');
  const [zipcode,setZipcode] = useState('');
  // const [address,setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const orderData = await fetchUserOrder();
        setOrder(orderData);
      } catch (error) {
        console.log("Error fetching data",error);
      }
    }
    fetchData();
  },[order]);

  useEffect(() => {
    if (order.length > 0) {
      const newTotal = order.reduce((total, ord) => {
        return total + ord.orderDetails.reduce((subTotal, detail) => {
          return subTotal + (detail.price * detail.quantity);
        }, 0);
      }, 0);
      const newVat = newTotal * 0.07;
      const newOrderTotal = newTotal + newVat;

      setVat(newVat);
      setOrderTotal(newOrderTotal);
      const currentDate = new Date();
      setPurchaseDate(currentDate.toLocaleDateString());
    }
  }, [order]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const address = `${city}, ${house}, ${note}`;
    console.log(address)
    try {
      const response = await checkoutOrder({
        vat,
        orderTotal,
        customerName,
        contact,
        zipcode,
        address
      });
      alert("Checkout success");
      console.log(response);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="mx-auto md:h-screen">
        <NavBar />
        <section className="bg-[#FFF9F0] md:p-12 border-t-2 md:h-auto" >
          <div className="flex flex-col rounded-3xl md:p-4 p-4  bg-[#e5dfd6] md:flex-1  shadow-xl shadow-[#4E4637] ">
            <h2 className="text-center md:text-start md:pl-4 md:pb-4 font-bold text-4xl md:border-b-2 border-[#897979]">
              Checkout
            </h2>
            <div className="md:flex md:flex-row md:w-full  flex flex-col gap-6 md:gap-4 ">
              <div className="mt-2 md:w-1/2 md:border-r-2 md:border-[#897979] ">
                <h3 className="pl-4 text-xl font-bold">
                  Choose your payment method
                </h3>
                <div className="bb-2">
                  <div className="flex items-center p-4">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="card"
                      name='card'
                      checked={payment === 'card'}
                      onChange={()=>SetPayment('card')}
                    />
                    <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="card1"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="card1"
                      />
                    </label>
                  </div>
                  <div className="flex items-center p-4">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="qr"
                      name='qr'
                      checked={payment === 'qr'}
                      onChange={()=>SetPayment('qr')}
                    />
                    <label htmlFor="QRcode" className="ml-4 flex gap-2 cursor-pointer">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_AF81uwMuVOBIQHs85gDHg-Z7NmTiwlQsA&s"
                        className="w-12"
                        alt="qrcode"
                      />
                    </label>
                  </div>
                </div>

                <div className=''>
                  <div>
                    {payment === 'card' ? (
                      <form className="mt-8 md:flex-col  h-1/2 ">
                        <div className="flex flex-col gap-4">
                          <input
                            type="text"
                            placeholder="Card number"
                            className="w-full md:w-[95%] rounded px-4 py-3"
                          />
                          <input
                            type="text"
                            placeholder=" Name of card holder"
                            className="w-full md:w-[95%] rounded px-4 py-3"
                          />
                          <div className="gap-4">
                            <input
                              type="text"
                              placeholder="EXP."
                              className="w-full md:w-[40%] rounded px-4 mr-2 py-3"
                            />
                            <input
                              type="text"
                              placeholder="CVV"
                              className="w-full md:w-[40%] rounded px-4 py-3 mt-4 md:mt-0  "
                            />
                          </div>
                        </div>
                      </form>
                    ) : (
                      <div className="flex justify-center mt-4 w-full h-full">
                        <img
                          src={QRcode}
                          className="w-72 h-72"
                          alt="QR code"
                        />
                      </div>
                    )}

                  </div>
                </div>
              </div>

              <div className="md:flex-col md:mt-2 md:w-1/2 md:items-end">
                  <div className='mb-2 md:bg-white rounded-md md:p-4  shadow-md shadow-[#A5AC99]'>
                    <h3 className=' pb-2 text-xl font-bold'>ADDRESS</h3>
                    <form className=" md:flex-col md:flex-1 ">
                      <div className="flex flex-col md:gap-1 gap-4">
                        <input
                          type="text"
                          placeholder="Recipient's Name"
                          value={customerName}
                          onChange={(e)=> setCustomerName(e.target.value)}
                          className="hover:border-[#897979] md:border-2 w-full md:w-[100%] rounded md:px-4 md:py-1 px-4 py-3"
                        />
                        <input
                          type="text"
                          placeholder="Phone Number"
                          value={contact}
                          onChange={(e)=> setContact(e.target.value)}
                          className="hover:border-[#897979] md:border-2 w-full md:w-[100%] rounded md:px-4 md:py-1 px-4 py-3"
                        />
                        <input
                          type="text"
                          value={city}
                          onChange={e=> setCity(e.target.value)}
                          placeholder="City/District/Subdistrict"
                          className="hover:border-[#897979] md:border-2 w-full md:w-[100%] rounded md:px-4 md:py-1 px-4 py-3"
                        />
                        <input
                          type="text"
                          placeholder="House No. ,Street Name, Unit/Floor"
                          value={house}
                          onChange={e=> setHouse(e.target.value)}
                          className="hover:border-[#897979] md:border-2 w-full md:w-[100%] rounded md:px-4 md:py-1 px-4 py-3"
                        />
                        <input
                          type="text"
                          placeholder="Zipcode"
                          value={zipcode}
                          onChange={e=> setZipcode(e.target.value)}
                          className="hover:border-[#897979] md:border-2 w-full md:w-[100%] rounded md:px-4 md:py-1 px-4 py-3"
                        />
                        <textarea
                          type="text"
                          placeholder="Additional note"
                          value={note}
                          onChange={e=> setNote(e.target.value)}
                          className="hover:border-[#897979] md:border-2 w-full md:w-[100%] rounded md:px-4 md:py-3 px-4 py-3"
                        />
                      </div>
                    </form>
                  </div>
                <div className="bg-white p-4 rounded md:w-full  shadow-md shadow-[#A5AC99]">
                  <h3 className="text-xl font-bold">Summary</h3>
                  <ul className=" p-2">
                    <li className="flex justify-between">
                      VAT(7%) <span className="font-bold">${vat.toFixed(2)}</span>
                    </li>
                    <li className="flex justify-between">
                      Purchase Date <span className="font-bold">{purchaseDate}</span>
                    </li>
                    <hr />
                    <li className="flex justify-between font-bold">
                      Total <span className="font-bold">${orderTotal.toFixed(2)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex w-full md:flex md:justify-between mt-2 gap-1 ">
              <Link
                type="button"
                to="/cart"
                className="px-2 py-1  rounded-md text-red-500 hover:text-red-700 font-semibold bg-white  w-1/5 md:hidden  border-2 border-[#897979] "
              >
                Back to Cart
              </Link>
              <Link to="/cart" className='text-red-500 hover:text-red-700 font-bold hidden md:block pt-4 pl-4'>
                    ⇦Back to Cart
              </Link>
              <button
                type="button"
                onClick={handleCheckout}
                className="px-6 py-4 bg-[#897979] rounded-md hover:bg-white hover:text-[#897979]  w-4/5 md:w-[49.50%] md:boder-2 text-white text-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </section>  
        <Footer />
      </div>
  )
}

export default PaymentPage