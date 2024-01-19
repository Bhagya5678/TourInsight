import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ProductInfo from '../Info/transportationProductInfo';
import Apps from '../Accordion/Apps';
import DatePicker from '../components/DatePicker';
import { useGlobalContext } from '../Context';

const ProductFullscreen = () => {
  const [transportationdetails, setTransportationdetails] = useState({});
  const [bookingDates, setBookingDates] = useState([]);
  const { id } = useParams();
  const { location } = useGlobalContext;

  useEffect(() => {
    fetchTransportationDetails();
  }, [id]);

  const fetchTransportationDetails = async () => {
    try {
      // Fetch transportation details
      const response = await fetch(`http://localhost:5000/api/transportation/${id}`);
      const transportationJson = await response.json();

      if (transportationJson) {
        setTransportationdetails(transportationJson);

        // Fetch booking dates
        const bookingResponse = await fetch(`http://localhost:5000/api/transportation/${id}`);
        const bookingJson = await bookingResponse.json();

        if (bookingJson && bookingJson.booked_dates) {
          setBookingDates(bookingJson.booked_dates);
        }
      }
    } catch (e) {
      console.log(e, "error");
    }
  };

  return (
    <div className="flex flex-row  rounded-2xl m-10 bg-gray-300">
      <div className="w-2/3 max-w-[70rem] mt-12 ml-12 mr-12 flex-1 relative">
        <h1 className="text-center font-bold text-4xl mb-10">{transportationdetails.transportation_name}</h1>
        {transportationdetails.image && (
          <Carousel images={transportationdetails.image} height="50%" />
        )}
        <div className="p-4 text-center bg-gray-200">
          <p>{transportationdetails.details}</p>
        </div>
      </div>
      <div className="bg-gray-300 p-8  border-l border-gray-200 rounded-2xl flex flex-col justify-start justify-self-end">
        <div className="w-100%">
          <Apps />
          <ProductInfo price={transportationdetails.price} title={transportationdetails.transportation_name} expectedPrice={5000} />
          {/* Display the fetched booking dates */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Book Dates:</h2>
            <DatePicker/>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-2">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductFullscreen;
