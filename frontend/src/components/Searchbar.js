import React, { useState } from "react";

const cities = [
  "Shimla", "Manali", "Darjeeling", "Ooty", "Munnar", "Nainital", "Mussoorie",
  "Kodaikanal", "Gulmarg", "Shillong", "Mount Abu", "Dalhousie", "Auli", "Kasauli",
  "Coorg", "Lonavala", "Mahabaleshwar", "Pahalgam", "Lansdowne", "Yercaud", "Tawang",
  "Coonoor", "Ranikhet", "Saputara", "Chamba", "Kufri", "Khajjiar", "Almora",
  "Horsley Hills", "Chikmagalur"
];

const PasswordGenerator = () => {
    const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col items-center min-w-screen min-h-screen bg-bg-white p-5">
      {/* Container for Search Bar and Cities List */}
      <div className="w-full max-w-3xl">

        {/* Search Bar */}
        <div className="w-full mx-auto rounded-xl bg-medium-blue shadow-lg p-10 text-gray-800 relative overflow-hidden min-w-80">
          <div className="relative mt-1">
                <input
                          value={search}
                          onChange={(e) => { setSearch(e.target.value) }}
              type="text"
              id="password"
              className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-light-blue transition-colors"
              placeholder="SEARCH YOUR NEXT DESTINATION . . . "
            />
            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
              <i className="mdi mdi-magnify"></i>
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-2 flex">
            <div className="h-2 bg-dark-blue flex-1"></div>
            <div className="h-2 bg-medium-blue flex-1"></div>
            <div className="h-2 bg-light-blue flex-1"></div>
            <div className="h-2 bg-light-blue flex-1"></div>
            <div className="h-2 bg-medium-blue flex-1"></div>
            <div className="h-2 bg-dark-blue flex-1"></div>
          </div>
        </div>

        {/* List of Cities */}
        <div className="flex flex-wrap mt-4">
            {cities.filter((city) => {
                if (city.toLowerCase().includes(search.toLocaleLowerCase())) {
                    return true;
                }
            }).map((city, index) => (
                <span key={index} className="h-8 p-2"> {/* Add h-8 for fixed height */}
                    <span className="text-medium-blue font-bold transition-all duration-300 hover:text-lg">{city}</span>
                </span>
            ))}
        </div>
    </div>
</div>
);
};

export default PasswordGenerator;
