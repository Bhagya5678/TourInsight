  const express = require("express");
  const Transportation = require('../models/Transportation');
  const router=express.Router();
  const Users=require("../models/User")

  router.get('/transportation/:id', async (req, res) => {
    const transportationId = req.params.id;
  
    try {
      // Find the transportation by ID
      const transportation = await Transportation.findById(transportationId);
  
      if (!transportation) {
        return res.status(404).json({ error: 'Transportation not found' });
      }
  
      // Return the transportation information
      const { booked_dates } = transportation.booked_dates;
      res.json({ booked_dates });
    } catch (error) {
      console.error('Error fetching transportation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  router.post('/previousbooking/:id', async (req, res) => {
    const userId = req.params.id;
    const { categoryName, dates, p_id } = req.body;

    try {
      // Find the user by ID
      const user = await Users.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check if user has previous bookings
      const previousBookings = user.previousbooking ;

      // Add a new booking object to previous bookings
      previousBookings.push({
        category_name: categoryName,
        p_id: p_id,
        dates: dates,
      });

      // Update the user's previous bookings
      user.previousbooking = previousBookings;

      // Save the updated user document
      const updatedUser = await user.save();

      res.json({ updatedUser });
    } catch (error) {
      console.error('Error updating previous bookings:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports = router;

