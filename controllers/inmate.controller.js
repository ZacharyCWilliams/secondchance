const Inmate = require('../models/inmate.model.js');

//POST METHOD
exports.create = (req, res) => {

  //create new inmate
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

  //attempt to save the new inmate
  inmate.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the inmate."
      });
    });
};


//GET SINGLE INMATE METHOD
exports.findOne = (req, res) => {
  Inmate.findById(req.params.inmateId)
    .then(inmate => {
      if (!inmate) {
        return res.status(404).send({
          message: "inmate not found with id " + req.params.inmateId
        });
      }
      res.send(inmate);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "inmate not found with id " + req.params.inmateId
        });
      }
      return res.status(500).send({
        message: "Error retrieving inmate with id " + req.params.inmateId
      });
    });
};


//GET ALL INMATES METHOD
exports.findAll = (req, res) => {

  Inmate.find()
    .then(inmates => {
      res.send(inmates);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving inmates."
      });
    });

};