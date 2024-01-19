import React from 'react'
import logoImg from "../images/logo.png";

function Footer() {
  return (
    <div className='relative'>
    <footer className="bg-dark-blue p-6 text-white absolute w-full top-24 ">
      <div className="container mx-auto flex justify-between items-center ">
        <div>
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoImg} className="h-16" alt="TourInsight Logo" />
            
            <span className="text-bg-white self-center text-3xl font-semibold whitespace-nowrap">
              TourInsight
            </span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-xl hover:underline">About Us</a>
          <a href="#" className="text-xl hover:underline">Contact Us</a>
          <a href="#" className="text-xl hover:underline">Terms of Service</a>
        </div>


        
      </div>
    </footer>
    </div>
    
  )
}

export default Footer