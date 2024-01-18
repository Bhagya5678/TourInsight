import React, { useState } from "react";
import logoImg from "../images/logo.png";
import WeatherCard from "./WeatherCard";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [weatherWidget, setWeatherWidget] = useState(false);

  function toggleWeather() {
    setWeatherWidget(!weatherWidget);
  }
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (<>
    <nav className="bg-dark-blue relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        {/* logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoImg} className="h-16" alt="TourInsight Logo" />
          <span className="text-bg-white self-center text-3xl font-semibold whitespace-nowrap">TourInsight</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`hidden w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">

          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-bg-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-medium-blue md:p-0 dark:text-white md:dark:hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-bg-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-medium-blue md:p-0 dark:text-white md:dark:hover:text-blue-500">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-bg-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-medium-blue md:p-0 dark:text-white md:dark:hover:text-blue-500">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-bg-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-medium-blue md:p-0 dark:text-white md:dark:hover:text-blue-500">Contact</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-bg-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-medium-blue md:p-0 dark:text-white md:dark:hover:text-blue-500" onClick={toggleWeather}>Weather</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="z-10 absolute end-0 border-solid border-2 border-dark-blue mr-10 rounded-3xl">{weatherWidget ? <WeatherCard /> : null}</div>
    </nav>
    
    </>
  );
};

export default Navbar;