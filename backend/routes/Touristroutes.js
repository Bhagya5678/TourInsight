const express = require("express");
const Categories = require("../models/Categories");
const Tourist =require("../models/TouristSchema")
const router = express.Router();

router.get('/Tourist', async (req, res) => {
  try {
    const allTourist = await Tourist.find();

    res.json({ allTourist : allTourist  });
  } catch (error) {
    console.error("Error fetching Tourist:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

  router.get('/Tourist/:id', async (req, res) => {
    const Touristid= req.params.id;
  
    try {
      const Tourist = await Tourist.findById(Touristid);
      if (!Tourist) {
        return res.status(404).json({ error: 'Tourist not found' });
      }
      res.status(200).json(Tourist); 
    } catch (error) {
      console.error('Error fetching Tourist:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;

router.post('/Tourist', async (req, res) => {
    try {
      const {
        Tourist_name,
        details,
        image,
        address,
        booked_dates,
        location,
        price,
        reviews
      } = req.body;
  
      const newTourist = new Tourist({
        Tourist_name,
        details,
        image,
        address,
        booked_dates,
        location,
        price,
        reviews
      });
      const savedTourist = await newTourist.save();
      res.status(201).json({ Tourist: savedTourist });
    } catch (error) {
      console.error('Error creating Tourist:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
