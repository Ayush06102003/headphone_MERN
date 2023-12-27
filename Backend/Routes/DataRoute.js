// Routes/DataRoute.js
const express = require('express');
const Item = require("../models/item")

const router = express.Router();

router.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json({ message: 'Item added successfully' });
  } 
  
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/fetchall', async (req,res)=>{
  try {
    const all = await Item.find();
    res.json(all);
  } catch (error) {
    console.log(error.message);
        res.status(500).send('Internal server error');
  }
})

module.exports = router;
