import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ProductInfo from '../Info/AccomodationProductInfo'
import Apps from '../Accordion/Apps';
import { MdVerified } from "react-icons/md";


const AccomodationCard = () => {
    const [accomodationdetails, setaccomodationdetails] = useState({});
    const [vendorDetails, setVendorDetails] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
      console.log('id:', id);
      fetchAccomodationDetails();
    }, []);
    
    useEffect(() => {
      if (accomodationdetails && accomodationdetails.vendor_id) {
        fetchVendorDetails(accomodationdetails.vendor_id);
      }
    }, [accomodationdetails]);
    
    useEffect(() => {
    }, [vendorDetails]);
    
    const fetchAccomodationDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/accomodation/${id}`);
        const json = await response.json();
        if (json) {
            setaccomodationdetails(json);
        }
      } catch (e) {
        console.log(e, "error");
      }
    };
    
    const fetchVendorDetails = async (vendor) => {
      try {
        const response = await fetch(`http://localhost:5000/api/vendorname/${vendor}`);
        const json = await response.json();
        console.log(response)
        if (json) {
          setVendorDetails(json);
        }
      } catch (e) {
        console.log(e, "error");
      }
    };

  return (
    <>
    
    <div className="flex flex-row  rounded-2xl m-10 bg-gray-300">
        
      <div className="w-2/3 max-w-[70rem] mt-12 ml-12 mr-12 flex-1 relative">
      <div className="flex items-center">
        <h2 className="text-center font-bold text-4xl mb-2">{accomodationdetails.hotel_name}   -   {vendorDetails.vendorName}</h2>
        {vendorDetails.verified ? <MdVerified color='green' size={40} style={{ marginLeft: '10px' }} /> : null}
      </div>
        {/* Conditional rendering for Carousel */}
        {accomodationdetails.image && (
          <Carousel images={accomodationdetails.image} height="50%" />
        )}

        {/* Additional Information below the carousel */}
        <div className="p-4 text-center bg-gray-200">
          <p>{accomodationdetails.details}</p>
        </div>
      </div>

      <div className="bg-gray-300 p-8  border-l border-gray-200 rounded-2xl flex flex-col justify-start justify-self-end">
        <div className="w-100%">
          {/* Add to Cart and Add to Wishlist buttons */}
          <Apps/>
          <ProductInfo price={accomodationdetails.price} title={accomodationdetails.hotel_name} expectedPrice={5000} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-2">Book Now</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AccomodationCard;
