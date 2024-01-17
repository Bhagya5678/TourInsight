import React from 'react';
import { useNavigate } from 'react-router-dom';
import reslogo from '../images/restuarant.jpg';
import hotel from '../images/hotel.png';
import shopping from '../images/shopping.jpg';
import tourist from '../images/tourist.jpg';
import transport from '../images/transport2.jpg';

function Cards() {
  const navigate = useNavigate();

  const navigateToCategory = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/5 p-2" onClick={() => navigateToCategory('accommodation')}>
          <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:text-lg">
            <img className="h-48 w-full object-cover object-center" src={hotel} alt="Accommodation" />
            <div className="p-6">
              <div className="uppercase text-base text-navy-blue font-bold">Accommodation</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 p-2" onClick={() => navigateToCategory('restaurant')}>
          <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <img className="h-48 w-full object-cover object-center" src={reslogo} alt="Restaurants" />
            <div className="p-6">
              <div className="uppercase text-base text-navy-blue font-bold pl-4">Restaurants</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 p-2" onClick={() => navigateToCategory('shopping')}>
          <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <img className="h-48 w-full object-cover object-center" src={shopping} alt="Restaurants" />
            <div className="p-6">
              <div className="uppercase text-base text-navy-blue font-bold pl-4">Shopping</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 p-2" onClick={() => navigateToCategory('touristattraction')}>
          <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <img className="h-48 w-full object-cover object-center" src={tourist} alt="Restaurants" />
            <div className="p-6">
              <div className="uppercase text-base text-navy-blue font-bold pl-4">Tourist Attraction</div>
            </div>
          </div>
        </div>
         <div className="w-full md:w-1/5 p-2" onClick={() => navigateToCategory('transportation')}>
          <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <img className="h-48 w-full object-cover object-center" src={transport} alt="Restaurants" />
            <div className="p-6">
              <div className="uppercase text-base text-navy-blue font-bold pl-4">Transportation</div>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other categories */}
      </div>
    </>
  );
}

export default Cards;
