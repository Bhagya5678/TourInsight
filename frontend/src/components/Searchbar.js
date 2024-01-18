import React, { useEffect, useState } from "react";
import CustomCalendar from "./CustomCalendar";
import { useGlobalContext } from "../Context";

const cities = [
  "Shimla", "Manali", "Darjeeling", "Ooty", "Munnar", "Nainital", "Mussoorie",
  "Kodaikanal", "Gulmarg", "Shillong", "Mount Abu", "Dalhousie", "Auli", "Kasauli",
  "Coorg", "Lonavala", "Mahabaleshwar", "Pahalgam", "Lansdowne", "Yercaud", "Tawang",
  "Coonoor", "Ranikhet", "Saputara", "Chamba", "Kufri", "Khajjiar", "Almora",
  "Horsley Hills", "Chikmagalur"
];

const Searchbar = () => {
  const { setLocationInfo , startDate , endDate, location} = useGlobalContext();

  const handleCityClick = (city) => {
    setLocationInfo(city);
  };

  const [search, setSearch] = useState("");


  return (
    <>
      <div className="flex min-w-screen min-h-screen bg-bg-white p-5">
        {/* Container for Search Bar and Cities List */}
        <div className="w-full mt-20 basis-2/3">

          {/* Search Bar */}
          <div className="w-full mx-auto rounded-xl bg-medium-blue shadow-lg p-10 text-gray-800 relative overflow-hidden min-w-80">
            <div className="relative mt-1">
              <input
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                type="text"
                className="w-full pl-3 pr-10 py-4 border-2 rounded-2xl hover:border-gray-300 focus:outline-none focus:border-light-blue transition-colors"
                placeholder="SEARCH YOUR NEXT DESTINATION . . . "
                autoComplete="off"
              />
            </div>
          </div>

          {/* List of Cities */}
          <div className="flex flex-wrap mt-4">
            {cities
              .filter((city) => city.toLowerCase().includes(search.toLowerCase()))
              .map((city, index) => (
                <span key={index} className="h-8 p-2">
                  {/* Add h-8 for fixed height */}
                  <span
                    onClick={() => handleCityClick(city)}
                    className="text-medium-blue font-bold transition-all duration-300 hover:text-lg"
                  >
                    {city}
                  </span>
                </span>
              ))}
          </div>
        </div>
        {/* <div className="fixed bottom-0 left-0 right-0 p-4 bg-bg-white text-center mb-10">
        <button className="bg-medium-blue text-white py-4 px-6 rounded-md hover:bg-dark-blue focus:outline-none">
          PROCEED
        </button>
      </div> */}

        <div className="w-full md:w-1/3 ml-10 mt-20">
          <h4 className="text-dark-blue font-bold">CHOOSE DATES</h4>
          <CustomCalendar/>
          </div>
        </div>
    </>
  );
};

export default Searchbar;
