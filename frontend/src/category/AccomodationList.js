import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context';

function AccomodationList() {
  const [accomodation, setAccomodation] = useState([]);
  const navigate = useNavigate();
  const { location } = useGlobalContext;

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/accomodation');
      const data = await response.json();
      setAccomodation(data.allAccomodations);
    } catch (error) {
      console.error('Error fetching accomodation data:', error);
    }
  
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleReadMoreClick = (accomodation_id) => {
    // Use the navigate function to navigate to the desired URL
    navigate(`/category/accomodation/${accomodation_id}`);
  };
  const filteredAccomodation = accomodation.filter((accomodation) => {
    return accomodation.location === location;
  });
  
  return (
    <div className="flex flex-wrap justify-start">
      {filteredAccomodation.map((accomodation) => (
        <div key={accomodation._id} className="w-1/4 p-4">
          <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <img
              className="h-48 w-full object-cover object-center rounded-t-xl"
              src={accomodation.image[0]}
              alt={accomodation.hotel_name}
            />
            <div className="p-6">
              <div className="uppercase text-base text-navy-blue font-bold">{accomodation.hotel_name}</div>
              <p className="mt-2 text-gray-500 text-sm">{accomodation.details}</p>
              <button
                onClick={() => handleReadMoreClick(accomodation._id)}
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

export default AccomodationList;

