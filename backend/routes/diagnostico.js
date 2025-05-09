const express = require('express');
const router = express.Router();
const Doenca = require('../models/Doenca');

// receive symptoms and returns possible diseases
router.post('/', async (req, res) => {
  const { symptoms } = req.body;
  // search for diseases with at least one matching symptom
  const diseases = await Doenca.find({ symptoms: { $in: symptoms } });
  res.json(diseases);
})

module.exports = router;