import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Vendor() {
  const [transportations, setTransportations] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const {vendorId}=useParams()// Replace with the actual vendor_id
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (category) => {
      try {
        const response = await fetch(`http://localhost:5000/api/${category}`);
        const data = await response.json();

        switch (category) {
          case 'transportation':
            const filteredTransportations = data.allTransportations.filter(
              (transportation) => transportation.vendor_id === vendorId
            );
            setTransportations(filteredTransportations);
            break;
          case 'accomodation':
            const filteredAccommodations = data.allAccomodations.filter(
              (accommodation) => accommodation.vendor_id === vendorId
            );
            setAccommodations(filteredAccommodations);
            break;
          case 'restaurants':
            const filteredRestaurants = data.allRestaurants.filter(
              (restaurant) => restaurant.vendor_id === vendorId
            );
            setRestaurants(filteredRestaurants);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
      }
    };

    fetchData('transportation');
    fetchData('accomodation');
    fetchData('restaurants');
  }, []);

  const handleReadMoreClick = (category, itemId) => {
    navigate(`/category/${category}/${itemId}`);
  };

  return (
    <div className="m-4">
      <h2 className=" m-4 text-3xl font-bold mb-4">Transportation</h2>
      <div className="m-4 space-x-2">
    <button
      className=" bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
      onClick={() => navigate(`/vendorcreatetransport/${vendorId}`)}
    >
      Create
    </button>
  </div>

      <div className="flex flex-wrap">
        {transportations.map((transportation) => (
          <div key={transportation._id} className="w-1/4 p-4">
          <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <img
              className="h-48 w-full object-cover object-center rounded-t-xl"
              src={transportation.image[0]}
              alt={transportation.transportation_name}
            />
            <div className="p-6">
              <div className="uppercase text-base text-navy-blue font-bold">{transportation.transportation_name}</div>
              <p className="mt-2 text-gray-500 text-sm">{transportation.details}</p>
              
            </div>
          </div>
        </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-4 mt-8">Accommodations</h2>
      <div className="m-4 space-x-2">
    <button
     onClick={() => navigate(`/vendorcreaterestaurant/${vendorId}`)}className=" bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
    >
      Create
    </button>
  </div>
      <div className="flex flex-wrap">
        {accommodations.map((accommodation) => (
          <div key={accommodation._id} className="w-1/4 p-4">
          <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <img
              className="h-48 w-full object-cover object-center rounded-t-xl"
              src={accommodation.image[0]}
              alt={accommodation.accommodation_name}
            />
            <div className="p-6">
              <div className="uppercase text-base text-navy-blue font-bold">{accommodation.accommodation_name}</div>
              <p className="mt-2 text-gray-500 text-sm">{accommodation.details}</p>

            </div>
          </div>
        </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-4 mt-8">Restaurants</h2>
      <div className="m-4 space-x-2">
    <button
      className=" bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
    >
      Create
    </button>
  </div>
      <div className="flex flex-wrap">
        {restaurants.map((restaurant) => (
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
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}


export default Vendor;

