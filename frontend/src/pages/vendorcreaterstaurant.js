import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RestaurantForm = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    restaurant_name: '',
    details: '',
    address: '',
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
      const response = await fetch('http://localhost:5000/api/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          booked_dates: null, // Pass booked_dates as null for now
          reviews: null, // Pass reviews as null for now
          vendor_id: vendorId, // Add the vendor_id from the URL parameter
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Restaurant created:', data.restaurant);

      } else {
        console.error('Error creating restaurant:', response.status);
        // Handle error scenarios as needed
      }
    } catch (error) {
      console.error('Error creating restaurant:', error);
      // Handle other types of errors (e.g., network issues)
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Create Restaurant</h2>
      <form onSubmit={handleSubmit}>
        {/* Add your form fields here */}
        <label>
          Restaurant Name:
          <input
            type="text"
            name="restaurant_name"
            value={formData.restaurant_name}
            onChange={handleChange}
            required
          />
        </label>
        {/* Repeat similar blocks for other form fields */}
        
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
          Create
        </button>
      </form>
    </div>
  );
};

export default RestaurantForm;
