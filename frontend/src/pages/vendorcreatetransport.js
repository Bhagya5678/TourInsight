import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

const VendorcreateTransport = () => {
    const { vendorId } = useParams();
  const [formData, setFormData] = useState({
    transportation_name: '',
    details: '',
    image: '',
    location: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/transportation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          booked_dates: [], // Pass booked_dates as null for now
          reviews: [], // Pass reviews as null for now
          vendor_id: vendorId, // Add the vendor_id from the URL parameter
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Transportation created:', data.transportation);

      } else {
        console.error('Error creating transportation:', response.status);
        // Handle error scenarios as needed
      }
    } catch (error) {
      console.error('Error creating transportation:', error);
      // Handle other types of errors (e.g., network issues)
    }
  };
  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 max-w-md rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">Transportation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Transportation Name:</label>
          <input
            type="text"
            name="transportation_name"
            value={formData.transportation_name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Details:</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <input type="hidden" name="vendor_id" value={vendorId} />
        <Link to={`/vendor/${vendorId}`}>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
        </Link>
      </form>
    </div>
  );
};

export default VendorcreateTransport;
