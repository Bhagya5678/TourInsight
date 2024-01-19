import React from 'react'
import { useState,useEffect } from 'react';

function Vendor() {
    const [transportations, setTransportations] = useState([]);
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
  return (
    <div>
      
    </div>
  )
}

export default Vendor
