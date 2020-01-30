const Citizen = require('../models/citizen.model.js');
const validator = require('../middleware/citizen.validator');

exports.create = (req, res) => {

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

  citizen.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Citizen."
      });
    });
};

exports.findOne = (req, res) => {
  Citizen.findById(req.params.citizenId)
    .then(citizen => {
      if (!citizen) {
        return res.status(404).send({
          message: "Citizen not found with id " + req.params.citizenId
        });
      }
      res.send(citizen);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Citizen not found with id " + req.params.citizenId
        });
      }
      return res.status(500).send({
        message: "Error retrieving citizen with id " + req.params.citizenId
      });
    });
};
