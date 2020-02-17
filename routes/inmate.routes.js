const express = require('express');
const { Inmate, validateInmate } = require('../models/inmate.model.js');
const router = express.Router();

//create new inmate
router.post('/', async (req, res) => {

  const { error } = validateInmate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const inmate = new Inmate({
    name: req.body.name || 'untitled',
    dob: req.body.dob,
    gender: req.body.gender,
    orientation: req.body.orientation,
    location: req.body.location,
    about: req.body.about,
    interests: req.body.interests,
    goals: req.body.goals,
    inc_date: req.body.inc_date,
    charges: req.body.charges
  });

  await inmate.save();

  res.send(inmate);

});


//create all inmates
router.get('/', async (req, res) => {
  const inmates = await Inmate.find();
  res.send(inmates);
});


//get single inmate
router.get('/:inmateId', async (req, res) => {
  let inmate = await Inmate.findById(req.params.inmateId);
  res.send(inmate);
});


module.exports = router;