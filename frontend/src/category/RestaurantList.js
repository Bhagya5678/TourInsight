import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  const { location } = useGlobalContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/restaurants');
        const data = await response.json();
        setRestaurants(data.allRestaurants);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.location === location;
  });

  console.log('All Restaurants:', restaurants);
  console.log('Filtered Restaurants:', filteredRestaurants);

  const handleReadMoreClick = (restaurantId) => {
    navigate(`/category/restaurant/${restaurantId}`);
  };

  return (
    <div className="flex flex-wrap justify-start">
      {filteredRestaurants.map((restaurant) => (
        <div key={restaurant._id} className="w-1/4 p-4">
          <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <img
              className="h-48 w-full object-cover object-center rounded-t-xl"
              src={restaurant.image[0]}
              alt={restaurant.restaurant_name}
            />
            <div className="p-6">
              <div className="uppercase text-base text-navy-blue font-bold">{restaurant.restaurant_name}</div>
              <p className="mt-2 text-gray-500 text-sm">{restaurant.details}</p>
              <button
                onClick={() => handleReadMoreClick(restaurant._id)}
                className="mt-2 bg-blue-300 hover:bg-navy-blue-dark text-navy-blue-dark font-bold py-2 px-4 rounded-lg"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;
