const express = require("express");
const Categories = require("../models/Categories");
const Shopping =require("../models/ShoppingSchema")
const router = express.Router();

router.get('/Shopping', async (req, res) => {
  try {
    const allShopping = await Shopping.find();

    res.json({ allShopping : allShopping  });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

  router.get('/Shopping/:id', async (req, res) => {
    const Shoppingid= req.params.id;
  
    try {
      const Shopping = await Shopping.findById(Shoppingid);
      if (!Shopping) {
        return res.status(404).json({ error: 'Shopping not found' });
      }
      res.status(200).json(Shopping); 
    } catch (error) {
      console.error('Error fetching Shopping:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;

router.post('/Shopping', async (req, res) => {
    try {
      const {
        Shopping_name,
        details,
        image,
        address,
        booked_dates,
        location,
        price,
        reviews
      } = req.body;
  
      const newShopping = new Shopping({
        Shopping_name,
        details,
        image,
        address,
        booked_dates,
        location,
        price,
        reviews
      });
      const savedShopping = await newShopping.save();
      res.status(201).json({ Shopping: savedShopping });
    } catch (error) {
      console.error('Error creating Shopping:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
