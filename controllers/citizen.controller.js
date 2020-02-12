const Citizen = require('../models/citizen.model.js');
const Joi = require('joi');
const _ = require('lodash');

exports.create = (req, res) => {

  //validates req.body for all required properties

  const { error } = validateCitizen(req.body);;
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  //create new citizen if passes validation
  const citizen = new Citizen({
    name: req.body.name || 'untitled',
    gender: req.body.gender,
    dob: req.body.dob,
    location: req.body.location,
    userRef: req.body.userRef || 'no user ref assigned'
  });

  //save the new citizen
  citizen.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the inmate."
      });
    });
};

exports.findOne = async (req, res) => {
  let citizen = await Citizen.findById(req.params.citizenId);
  res.send(citizen);
};

exports.findAll = async (req, res) => {
  const citizens = await Citizen.find();
  res.send(citizens);
};


function validateCitizen(citizen) {
  const schema = {
    name: Joi.string().min(3).required(),
    dob: Joi.string().required(),
    gender: Joi.string().required(),
    location: Joi.string().required(),
    userRef: Joi.string().required()
  }

  return Joi.validate(citizen, schema);
}