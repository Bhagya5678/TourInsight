import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ProductInfo from '../Info/transportationProductInfo'
import Apps from '../Accordion/Apps';
import { MdVerified } from "react-icons/md";


const ProductFullscreen = () => {
  const [transportationDetails, setTransportationDetails] = useState({});
  const [vendorDetails, setVendorDetails] = useState({});
  const { id } = useParams();

useEffect(() => {
  console.log('id:', id);
  fetchTransportationDetails();
}, []);

useEffect(() => {
  console.log('transportationDetails:', transportationDetails);
  if (transportationDetails && transportationDetails.vendor_id) {
    fetchVendorDetails(transportationDetails.vendor_id);
  }
}, [transportationDetails]);

useEffect(() => {
  console.log('vendorDetails:', vendorDetails);
}, [vendorDetails]);

const fetchTransportationDetails = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/transportation/${id}`);
    const json = await response.json();
    console.log('json:', json);
    if (json) {
      setTransportationDetails(json);
    }
  } catch (e) {
    console.log(e, "error");
  }
};

const fetchVendorDetails = async (vendor) => {
  try {
    const response = await fetch(`http://localhost:5000/api/vendorname/${vendor}`);
    const json = await response.json();
    if (json) {
      setVendorDetails(json);
    }
  } catch (e) {
    console.log(e, "error");
  }
};


  


  return (

    // <div className="flex flex-row  rounded-2xl m-10 bg-gray-300">

    //   <div className="w-2/3 max-w-[70rem] mt-12 ml-12 mr-12 flex-1 relative">
    //   <h2 className="text-center font-bold text-4xl mb-10">{transportationDetails.transportation_name}-{vendorDetails.vendorName} {vendorDetails.verified ? <MdVerified color=''/> : null}</h2>
    //     {/* Conditional rendering for Carousel */}
    //     {transportationDetails.image && (
    //       <Carousel images={transportationDetails.image} height="50%" />
    //     )}
    <div className="flex flex-row  rounded-2xl m-10 bg-gray-300">
    <div className="w-2/3 max-w-[70rem] mt-12 ml-12 mr-12 flex-1 relative">
      <div className="flex items-center">
        <h2 className="text-center font-bold text-4xl mb-2">{transportationDetails.transportation_name}   -   {vendorDetails.vendorName}</h2>
        {vendorDetails.verified ? <MdVerified color='green' size={40} style={{ marginLeft: '10px' }} /> : null}
      </div>
      {/* Conditional rendering for Carousel */}
      {transportationDetails.image && (
        <Carousel images={transportationDetails.image} height="50%" />
      )}

        {/* Additional Information below the carousel */}
        <div className="p-4 text-center bg-gray-200">
          <p>{transportationDetails.details}</p>
        </div>
      </div>

      <div className="bg-gray-300 p-8  border-l border-gray-200 rounded-2xl flex flex-col justify-start justify-self-end">
        <div className="w-100%">
          {/* Add to Cart and Add to Wishlist buttons */}
          <Apps/>
          <ProductInfo price={transportationDetails.price} title={transportationDetails.transportation_name} expectedPrice={5000} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-2">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductFullscreen;
