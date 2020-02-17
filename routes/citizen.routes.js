const express = require('express');
const { Citizen, validateCitizen } = require('../models/citizen.model.js');
const router = express.Router();

// Create a new citizen
router.post('/', async (req, res) => {

  const { error } = validateCitizen(req.body);;
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const citizen = new Citizen({
    name: req.body.name || 'untitled',
    gender: req.body.gender,
    dob: req.body.dob,
    location: req.body.location,
    // userRef: req.body.userRef || 'no user ref assigned'
  });
  await citizen.save();

  res.send(citizen);
});

// Get all citizens
router.get('/', async (req, res) => {
  const citizens = await Citizen.find();
  res.send(citizens);
});

// Get a single citizen
router.get('/:citizenId', async (req, res) => {
  let citizen = await Citizen.findById(req.params.citizenId);
  res.send(citizen);
});




module.exports = router;