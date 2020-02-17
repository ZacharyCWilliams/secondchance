
const mongoose = require("mongoose");
const Joi = require('joi');
const Schema = mongoose.Schema;

function validateInmate(inmate) {
  const schema = {
    name: Joi.string().min(3).required(),
    dob: Joi.string().required(),
    gender: Joi.string().required(),
    orientation: Joi.string().required(),
    location: Joi.string().required(),
    about: Joi.string().required(),
    interests: Joi.string().required(),
    goals: Joi.string().required(),
    inc_date: Joi.string().required(),
    charges: Joi.string().required()
  }

  return Joi.validate(inmate, schema);
}

const inmateSchema = Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  orientation: { type: String, required: true },
  location: { type: String, required: true },
  about: { type: String, required: true },
  interests: { type: [String], required: true },
  goals: { type: [String], required: true },
  inc_date: { type: String, required: true },
  charges: { type: [String], required: true }
}, {
  timestamps: true
});

const Inmate = mongoose.model('Inmate', inmateSchema);

exports.Inmate = Inmate;
exports.validateInmate = validateInmate;


