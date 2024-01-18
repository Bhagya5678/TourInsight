const express = require("express");
const Accomodation=require("../models/AccomodationSchema")
const router = express.Router();

router.get('/accomodation', async (req, res) => {
  try {
    const allAccomodations = await Accomodation.find();

    res.json({ allAccomodations : allAccomodations  });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

  router.get('/accomodation/:id', async (req, res) => {
    const accomodation_id= req.params.id;
  
    try {
      const accomodation = await Accomodation.findById(accomodation_id);
      if (!accomodation) {
        return res.status(404).json({ error: 'Accomodation not found' });
      }
      res.status(200).json(accomodation); 
    } catch (error) {
      console.error('Error fetching Accomodation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.post('/accomodation', async (req, res) => {
    try {
      const {
        hotel_name,
        details,
        image,
        address,
        booked_dates,
        stars,
        location,
        price,
        reviews
      } = req.body;
  
      const newAccomodations = new Accomodation({
        hotel_name,
        details,
        image,
        stars,
        address,
        booked_dates,
        location,
        price,
        reviews
      });
      const savedAccomodation = await newAccomodations.save();
      res.status(201).json({ Accomodation: savedAccomodation });
    } catch (error) {
      console.error('Error creating accomodation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;
