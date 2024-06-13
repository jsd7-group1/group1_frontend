import React from 'react'
import { Link } from 'react-router-dom'

const CartPage = () => {
  return (
    <div>
        <section className="md:p-16  bg-[#e5dfd6]">
          <div className="w-full bg-white md:px-10 md:py-8 p-6 rounded-md overscroll-y-contain ">
            <div className=" pb-8 flex justify-center md:inline-block">
              <h1 className="font-semibold text-2xl  md:text-4xl ">Shopping Cart</h1>
            </div>
            <div className="md:flex md:mt-10 md:mb-5 border-b-4  hidden">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            <div className="flex items-center md:bg-white bg-[#e5dfd6] hover:bg-gray-100 -mx-8 px-6 py-5 border-b-2">
              <div className="flex w-2/5">
                {" "}
                {/* product */}
                <div className="w-20">
                  <img className="h-24" src="assets/images/hero/Coffee.png" alt="" />
                </div>
                <div className="flex flex-col  ml-4 flex-grow">
                  <span className="font-bold text-sm">MENU1</span>
                  <span className="text-red-500 text-xs">TYPE:HOT</span>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  defaultValue={1}
                />
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">$99</span>
              <span className="text-center w-1/5 font-semibold text-sm">$99</span>
            </div>
            <div className="flex items-center md:bg-white bg-[#e5dfd6] hover:bg-gray-100 -mx-8 px-6 py-5 border-b-2">
              <div className="flex w-2/5">
                {" "}
                {/* product */}
                <div className="w-20">
                  <img className="h-24" src="assets/images/hero/Coffee.png" alt="" />
                </div>
                <div className="flex flex-col ml-4 flex-grow">
                  <span className="font-bold text-sm">MENU2</span>
                  <span className="text-red-500 text-xs">TYPE:HOT</span>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  defaultValue={1}
                />
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">$99</span>
              <span className="text-center w-1/5 font-semibold text-sm">$99</span>
            </div>
            <div className="flex items-center md:bg-white bg-[#e5dfd6] hover:bg-gray-100 -mx-8 px-6 py-5 border-b-2">
              <div className="flex w-2/5">
                {" "}
                {/* product */}
                <div className="w-20">
                  <img className="h-24" src="assets/images/hero/Coffee.png" alt="" />
                </div>
                <div className="flex flex-col ml-4 flex-grow">
                  <span className="font-bold text-sm">MENU3</span>
                  <span className="text-red-500 text-xs">TYPE:HOT</span>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  defaultValue={1}
                />
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">$99</span>
              <span className="text-center w-1/5 font-semibold text-sm">$99</span>
            </div>
            <div className="md:p-12 flex justify-between  w-full">
              <div className="hidden md:inline-block w-1/2">
                <a
                  href="#"
                  className="flex font-semibold text-indigo-600 text-sm mt-10"
                >
                  ⇦Continue Shopping
                </a>
              </div>
              <div className="md:p-1 md:w-1/2 w-full ">
                <div className="md:flex md:justify-end items-center md:mt-8 mt-2 flex justify-between">
                  <span className="text-gray-600 mr-4">Total Quantity:</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="md:flex md:justify-end items-center md:mt-8 mt-2 flex justify-between">
                  <span className=" text-gray-600 mr-4">Total Discounts:</span>
                  <span className="font-bold">$0</span>
                </div>
                <div className="md:flex md:justify-end items-center md:mt-8 mt-2 flex justify-between">
                  <span className="text-gray-600 mr-4">Order Total:</span>
                  <span className="font-bold">$0</span>
                </div>
                <div className="md:flex md:justify-end items-center md:mt-8 mt-2 flex justify-between">
                  <span className="text-gray-600 mr-4">Purchase Date:</span>
                  <span className="font-bold">xx/xx/xx</span>
                </div>
                <div className="md:flex md:justify-end md:mt-8 mt-8 ">
                  <button
                    className="md:px-12 md:py-4 p-4 rounded-md text-white bg-[#897979]  hover:bg-[#00C9CB] md:w-1/2 w-full text-xl"
                    onclick="window.location.href = 'payment.html';"
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default CartPage