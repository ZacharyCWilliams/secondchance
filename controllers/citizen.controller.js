const Citizen = require('../models/citizen.model.js');
const validator = require('./citizen.validator');

exports.create = async (req, res) => {

  //validates req.body for all required properties
  validator(req.body, res);

  //create new citizen if passes validation
  const citizen = new Citizen({
    name: req.body.name || 'untitled',
    gender: req.body.gender,
    dob: req.body.dob,
    location: req.body.location
  });

  //save the new citizen
  await citizen.save();
};

exports.findOne = async (req, res) => {
  let citizen = await Citizen.findById(req.params.citizenId);
  res.send(citizen);
};

exports.findAll = async (req, res) => {
  const citizens = await Citizen.find();
  res.send(citizens);
};



