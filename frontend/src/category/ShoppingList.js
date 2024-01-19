import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context';

function ShoppingList() {
  const [Shopping, setShopping] = useState([]);
  const navigate = useNavigate();
  const { location } = useGlobalContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/Shopping');
        const data = await response.json();
        setShopping(data.allShopping);
      } catch (error) {
        console.error('Error fetching Shopping data:', error);
      }
    };

    fetchData();
  }, []);
  const filteredShopping = Shopping.filter((Shopping) => {
    return Shopping.location === location;
  });
//   const handleReadMoreClick = (Shoppingid) => {
//     // Use the navigate function to navigate to the desired URL
//     navigate(`/category/Shopping/${Shoppingid}`);
//   };
  console.log('All Restaurants:', Shopping);
  console.log('Filtered Restaurants:', filteredShopping);
  return (
    <div className="flex flex-wrap justify-start">
      {filteredShopping.map((Shopping) => (
        <div key={Shopping._id} className="w-1/4 p-4">
          <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <img
              className="h-48 w-full object-cover object-center rounded-t-xl"
              src={Shopping.image[0]}
              alt={Shopping.Shopping_name}
            />
            <div className="p-6">
              <div className="uppercase text-base text-navy-blue font-bold">{Shopping.Shopping_name}</div>
              <p className="mt-2 text-gray-500 text-sm">{Shopping.details}</p>
              {/* <button
                onClick={() => handleReadMoreClick(Shopping._id)}
                className="mt-2 bg-blue-300 hover:bg-navy-blue-dark text-navy-blue-dark font-bold py-2 px-4 rounded-lg"
              >
                READ MORE
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;

