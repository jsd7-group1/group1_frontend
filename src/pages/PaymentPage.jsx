import React from 'react'

const PaymentPage = () => {
  return (
    <div className=''>
      <section className="bg-white md:p-16 border-t-2 md:h-auto">
        <div className="flex flex-col rounded-md md:p-4 p-4  bg-[#e5dfd6] md:flex-1  ">
          <h2 className="text-center md:text-start md:pl-4 md:pb-4 font-semibold text-4xl md:border-b-2 border-[#897979]">
            Checkout
          </h2>
          <div className="md:flex md:flex-row md:w-full  flex flex-col gap-6 md:gap-4  md:h-auto">
            <div className="mt-6 md:w-2/3 md:border-r-2 md:border-[#897979] ">
              <h3 className="pl-4 text-xl font-semibold">
                Choose your payment method
              </h3>
              <div className="">
                <div className="flex items-center p-4">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="card"
                    defaultChecked=""
                  />
                  <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                    <img
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="card1"
                    />
                    <img
                      src="https://readymadeui.com/images/american-express.webp"
                      className="w-12"
                      alt="card2"
                    />
                    <img
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="card3"
                    />
                  </label>
                </div>
              </div>
              <div className=' h-auto md:overflow-scroll'>
                <div>
                  <form className="mt-6 md:flex-col md:flex-1 h-1/2">
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
                          className="w-full md:w-[40%] rounded px-4 py-3"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="w-full md:w-[40%] rounded px-4 py-3 mt-4 md:mt-0 "
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                <form className="mt-6 md:flex-col md:flex-1 h-1/2">
                    <div className="flex flex-col gap-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full md:w-[95%] rounded px-4 py-3"
                      />
                      <textarea
                        type="text"
                        placeholder=" Name of card holder"
                        className="w-full md:w-[95%] rounded px-4 py-3"
                        rows={10}
                      />
                      <div className="gap-4">
                        <input
                          type="text"
                          placeholder="EXP."
                          className="w-full md:w-[40%] rounded px-4 py-3"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="w-full md:w-[40%] rounded px-4 py-3 mt-4 md:mt-0 "
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Address"
                        className="w-full md:w-[95%] rounded px-4 py-3"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="md:flex md:w-1/3 md:items-end">
              <div className="bg-white p-6 rounded md:w-full  md:mb-[70px]">
                <h3 className="text-xl font-bold">Summary</h3>
                <ul className="mt-4">
                  <li className="flex justify-between">
                    Total Quatity<span className="font-bold">3</span>
                  </li>
                  <li className="flex justify-between">
                    Total Discounts <span className="font-bold">$0</span>
                  </li>
                  <li className="flex justify-between">
                    Purchase Date <span className="font-bold">xx/xx/xx</span>
                  </li>
                  <hr />
                  <li className="flex justify-between font-bold">
                    Total <span className="font-bold">$52.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-full md:flex md:justify-between mt-6 gap-1 ">
            <button
              type="button"
              className="px-2 py-1  rounded-md text-red-500 font-semibold bg-white hover:bg-[#DA1E28] w-1/5 md:w-[8%] border-2 border-[#897979] "
              onclick="window.location.href = 'cart.html';"
            >
              Back to Cart
            </button>
            <button
              type="button"
              className="px-6 py-4 bg-[#897979] rounded-md hover:bg-[#00C9CB] w-4/5 md:w-[33%] md:boder-2 text-white text-xl"
            >
              Submit
            </button>
          </div>
        </div>
      </section>  
    </div>
  )
}

export default PaymentPage