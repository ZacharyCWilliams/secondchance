const Joi = require('joi');

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

module.exports = validateInmate;