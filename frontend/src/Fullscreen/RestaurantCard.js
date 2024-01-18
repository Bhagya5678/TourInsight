import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import ProductInfo from '../Info/transportationProductInfo';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Apps from '../Accordion/Apps';

const RestaurantFullScreen = () => {
  const [restaurantDetails, setRestaurantdetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchRestaurantDetails();
  }, [id]);

  const fetchRestaurantDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/restaurants/${id}`);
      const json = await response.json();
      if (json) {
        setRestaurantdetails(json);
      }
    } catch (e) {
      console.log(e, "error");
    }
  };

  return (

    <div className="flex flex-row  rounded-2xl m-10 bg-gray-300">

      <div className="w-2/3 max-w-[70rem] mt-12 ml-12 mr-12 flex-1 relative">
      <h1>{restaurantDetails.restaurant_name}</h1>
        {/* Conditional rendering for Carousel */}
        {restaurantDetails.image && (
          <Carousel images={restaurantDetails.image} height="50%" />
        )}

        {/* Additional Information below the carousel */}
        <div className="p-4 text-center bg-gray-200">
          <p>{restaurantDetails.details}</p>
        </div>
      </div>

      <div className="bg-gray-300 p-8  border-l border-gray-200 rounded-2xl flex flex-col justify-start justify-self-end">
        <div className="w-100%">
          {/* Add to Cart and Add to Wishlist buttons */}
          <Apps/>
          <ProductInfo price={restaurantDetails.price} title={restaurantDetails.restaurant_name} expectedPrice={5000} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-2">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFullScreen;
