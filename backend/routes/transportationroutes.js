const express = require("express");
const Categories = require("../models/Categories");
const Transportation=require("../models/Transportation")
const router = express.Router();

router.get('/transportation', async (req, res) => {
  try {
    const allTransportaions = await Transportation.find();

    res.json({ allTransportations : allTransportaions  });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/transportation/:id', async (req, res) => {
    try {
      const allTransportaions = await Transportation.find();
  
      res.json({ allTransportations : allTransportaions  });
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  
router.get('/transportation/:id', async (req, res) => {
    const transportationId = req.params.id;
  
    try {
      const transportation = await Transportation.findById(transportationId);
      if (!transportation) {
        return res.status(404).json({ error: "Transportation not found" });
      }
      res.json({ transportation });
    } catch (error) {
      console.error("Error fetching transportation:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;

router.post('/transportation', async (req, res) => {
    try {
      const {
        transportation_name,
        details,
        image,
        booked_dates,
        location,
        price,
        reviews
      } = req.body;
  
      const newTransportation = new Transportation({
        transportation_name,
        details,
        image,
        booked_dates,
        location,
        price,
        reviews
      });
      const savedTransportation = await newTransportation.save();
      res.status(201).json({ transportation: savedTransportation });
    } catch (error) {
      console.error('Error creating transportation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
