import React, { useState } from "react";
import logoImg from "../images/logo.png";
import WeatherCard from "./WeatherCard";
import avatar from "../images/hotel.png";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from '../Context';


const Navbar = () => {
  const [weatherWidget, setWeatherWidget] = useState(false);
  const navigate = useNavigate();
  const { userInfo , vendorInfo } = useGlobalContext();


  function toggleWeather() {
    setWeatherWidget(!weatherWidget);
  }

  function handleSosClick() {
    // Redirect to the SOS page
    navigate("/sos");
  }

  return (
    <>
      <nav className="bg-dark-blue relative">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-1">
          {/* logo */}
          
            <Link to="/">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoImg} className="h-16" alt="TourInsight Logo" />
            
            <span className="text-bg-white self-center text-3xl font-semibold whitespace-nowrap">
              TourInsight
            </span>
          </a>
          </Link>
          <div className=" w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-bg-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-medium-blue md:p-0 dark:text-white md:dark:hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-bg-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-medium-blue md:p-0 dark:text-white md:dark:hover:text-blue-500">
                  Ask AI
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-bg-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-medium-blue md:p-0 dark:text-white md:dark:hover:text-blue-500" onClick={handleSosClick}>
                  SOS
                </a>
              </li>
              <li>
                <Link to="/login">
                <a href="#" className="block py-2 px-3 text-bg-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-medium-blue md:p-0 dark:text-white md:dark:hover:text-blue-500">
                  Log In
                </a>
                </Link>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-bg-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-medium-blue md:p-0 dark:text-white md:dark:hover:text-blue-500" onClick={toggleWeather}>
                  Weather
                </a>
              </li>
              <li>
                <img src={avatar} className="w-10 h-10 rounded-full" alt="User Avatar" />
              </li>
            </ul>
          </div>
        </div>
        <div className="z-10 absolute end-0 border-solid border-2 border-dark-blue mr-10 rounded-3xl">
          {weatherWidget ? <WeatherCard /> : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
