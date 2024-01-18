const express = require("express");
const Accomodation=require("../models/AccomodationSchema")
const router = express.Router();

router.get('/accomodations', async (req, res) => {
  try {
    const allAccomodations = await Accomodation.find();

    res.json({ allAccomodations : allAccomodations  });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

  router.get('/restaurants/:id', async (req, res) => {
    const accomodation_id= req.params.id;
  
    try {
      const accomodation = await Accomodation.findById(accomodation_id);
      if (!accomodation) {
        return res.status(404).json({ error: 'Transportation not found' });
      }
      res.status(200).json(accomodation); 
    } catch (error) {
      console.error('Error fetching transportation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;

router.post('/accomodations', async (req, res) => {
    try {
      const {
        restaurant_name,
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
        restaurant_name,
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
      console.error('Error creating transportation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
