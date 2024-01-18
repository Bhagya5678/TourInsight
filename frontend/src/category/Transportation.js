import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TransportationList() {
  const [transportations, setTransportations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/transportation');
        const data = await response.json();
        setTransportations(data.allTransportations);
      } catch (error) {
        console.error('Error fetching transportation data:', error);
      }
    };

    fetchData();
  }, []);

  const handleReadMoreClick = (transportationId) => {
    // Use the navigate function to navigate to the desired URL
    navigate(`/category/transportation/${transportationId}`);
  };

  return (
    <div className="flex flex-wrap justify-start">
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
              <button
                onClick={() => handleReadMoreClick(transportation._id)}
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

export default TransportationList;
