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

  //save the new citizen - still need to set up DB

  // citizen.save()
  //   .then(data => {
  //     res.send(data);
  //   }).catch(err => {
  //     res.status(500).send({
  //       message: err.message || "Some error occurred while creating the Citizen."
  //     });
  //   });

  //sends body back for testing

  res.send(req.body);

};


