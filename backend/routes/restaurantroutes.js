const express = require("express");
const Categories = require("../models/Categories");
const Restaurant =require("../models/RestaurantSchema")
const router = express.Router();

router.get('/restaurants', async (req, res) => {
  try {
    const allRestaurants = await Restaurant.find();

    res.json({ allRestaurants : allRestaurants  });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

  router.get('/restaurants/:id', async (req, res) => {
    const restaurantid= req.params.id;
  
    try {
      const restaurant = await Restaurant.findById(restaurantid);
      if (!restaurant) {
        return res.status(404).json({ error: 'Transportation not found' });
      }
      res.status(200).json(restaurant); 
    } catch (error) {
      console.error('Error fetching transportation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;

router.post('/restaurants', async (req, res) => {
    try {
      const {
        restaurant_name,
        details,
        image,
        address,
        booked_dates,
        location,
        price,
        reviews
      } = req.body;
  
      const newRestaurant = new Restaurant({
        restaurant_name,
        details,
        image,
        address,
        booked_dates,
        location,
        price,
        reviews
      });
      const savedRestaurant = await newRestaurant.save();
      res.status(201).json({ restaurant: savedRestaurant });
    } catch (error) {
      console.error('Error creating transportation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
