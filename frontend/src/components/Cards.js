import React from 'react';
import reslogo from '../images/restuarant.jpg'
import hotel from '../images/hotel.png'
import shopping from '../images/shopping.jpg'
import tourist from '../images/tourist.jpg'
import transport from '../images/transport2.jpg'
function Cards() {
    //<span className="text-medium-blue font-bold transition-all duration-300 hover:text-lg">{city}</span>
  return (
    <>
<div className="flex flex-wrap justify-center align-center max-w-[85rem]  ml-20 mt-40">
      <div className="w-full md:w-1/6 p-4">
        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:text-lg">
          <img className="h-48 w-full object-cover object-center" src={hotel}/>
          <div className="p-6">
          <div className="uppercase text-base text-navy-blue font-bold">Accommodation</div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/6 p-4">
        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <img className="h-48 w-full object-cover object-center" src={reslogo} alt="Man looking at item at a store"/>
          <div className="p-6">
            <div className="uppercase text-base text-navy-blue font-bold pl-4">Restaurants</div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/6 p-4">
        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <img className="h-48 w-full object-cover object-center" src={reslogo} alt="Man looking at item at a store"/>
          <div className="p-6">
            <div className="uppercase text-base text-navy-blue font-bold pl-5">Restaurants</div>
          </div>
        </div>
      </div><div className="w-full md:w-1/6 p-4">
        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <img className="h-48 w-full object-cover object-center" src={transport} alt="Man looking at item at a store"/>
          <div className="p-6">
            <div className="uppercase text-base text-navy-blue font-bold pl-5">Transport</div>
          </div>
        </div>
      </div><div className="w-full md:w-1/6 p-4">
        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <img className="h-48 w-full object-cover object-center" src={shopping} alt="Man looking at item at a store"/>
          <div className="p-6">
            <div className="uppercase text-base text-navy-blue font-bold pl-8">Shopping</div>
          </div>
        </div>
      </div><div className="w-full md:w-1/6 p-4">
        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <img className="h-48 w-full object-cover object-center" src={tourist} alt="Man looking at item at a store"/>
          <div className="p-6">
            <div className="uppercase text-base text-navy-blue font-bold pl-3">Tourist Places</div>
          </div>
        </div>
      </div>
      </div>
  </>
  );
}

export default Cards;
