const Citizen = require('../models/citizen.model.js');
const validator = require('../middleware/citizen.validator');


exports.create = (req, res) => {

  validator(req.body, res);

  const citizen = new Citizen({
    name: req.body.name || 'untitled',
    gender: req.body.gender,
    dob: req.body.dob,
    location: req.body.location
  });


  //Successful validation then create new Citizen with that req



  //attempt to save the new citizen
  // citizen.save()
  //   .then(data => {
  //     res.send(data);
  //   }).catch(err => {
  //     res.status(500).send({
  //       message: err.message || "Some error occurred while creating the Citizen."
  //     });
  //   });

    res.send(req.body);


};

//END OF CREATE FUNCTION

//No findAll method because inmates can't browse Citizens

// Find a single citizen with a citizenId
// exports.findOne = (req, res) => {
//   Citizen.findById(req.params.citizenId)
//     .then(citizen => {
//       if (!citizen) {
//         return res.status(404).send({
//           message: "citizen not found with id " + req.params.citizenId
//         });
//       }
//       res.send(citizen);
//     }).catch(err => {
//       if (err.kind === 'ObjectId') {
//         return res.status(404).send({
//           message: "Citizen not found with id " + req.params.citizenId
//         });
//       }
//       return res.status(500).send({
//         message: "Error retrieving citizen with id " + req.params.citizenId
//       });
//     });
// };
