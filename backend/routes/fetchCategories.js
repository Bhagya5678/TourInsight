const express = require("express");
const Categories = require("../models/Categories");
const router = express.Router();

router.get('/categories', async (req, res) => {
  try {
    const allCategories = await Categories.find();

    res.json(allCategories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
