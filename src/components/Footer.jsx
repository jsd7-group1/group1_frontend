import React from 'react'
import Reel from "../assets/images/footer-icons/reel.png"
import Instagram from "../assets/images/footer-icons/ig.png"
import Chat from "../assets/images/footer-icons/chat.png"

const Footer =()=> {
  return (
    <div>
        <footer className="bg-[#716464] py-6 md:flex">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 text-white">
                    <p>&copy; 2024 Potion Café. All rights reserved.</p>
                </div>
                    <div className="w-full md:w-1/2 text-white text-right">
                        <a href="https://www.instagram.com/reels/" className="inline-block mr-4 w-[22px]">
                        <img src={Reel} alt="reel"/>
                        </a>
                        <a href="https://www.instagram.com" className="inline-block mr-4 w-[22px]">
                        <img src={Instagram} alt="ig"/>
                        </a>
                        <a href="#chatbot" className="inline-block mr-4 w-[22px]">
                        <img src={Chat} alt="chat"/>
                        </a>
                    </div>
                </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer