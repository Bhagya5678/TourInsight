import React, { useEffect } from 'react';
import Carousel from './components/Carousel';
import ProductInfo from './components/transportationProductInfo';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ProductFullscreen = () => {
  const [transportationdetails, setTransportationdetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchTransportationDetails();
  }, [id]);

  const fetchTransportationDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/transportation/${id}`);
      const json = await response.json();
      if (json) {
        setTransportationdetails(json);
      }
    } catch (e) {
      console.log(e, "error");
    }
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="w-2/3 flex-1">
        {/* Conditional rendering for Carousel */}
        {transportationdetails.image && (
          <Carousel images={transportationdetails.image} height="50%" />
        )}

        {/* Additional Information below the carousel */}
        <div className="p-4 text-center bg-gray-200">
          <p>{transportationdetails.details}</p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 flex flex-col justify-between justify-self-end">
        <div className="mt-4 w-full">
          {/* Add to Cart and Add to Wishlist buttons */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-2">Add to Cart</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md w-full">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductFullscreen;
