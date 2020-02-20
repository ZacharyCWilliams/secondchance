const mongoose = require("mongoose");
const Joi = require('joi');
const Schema = mongoose.Schema;

function validateCitizen(citizen) {
  const schema = {
    name: Joi.string().min(3).required(),
    dob: Joi.string().required(),
    gender: Joi.string().required(),
    location: Joi.string().required()
    // userRef: Joi.string().required()
  }

  return Joi.validate(citizen, schema);
}

const citizenSchema = Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  location: { type: String, required: true },
  // userRef: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
},
{
  timestamps: true
});

const Citizen = mongoose.model('Citizen', citizenSchema);

exports.Citizen = Citizen;
exports.validateCitizen = validateCitizen;

