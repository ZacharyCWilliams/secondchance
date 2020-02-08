const Joi = require('joi');

function validateAuth(req) {
  //comment
  console.log('validate')
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  }

  return Joi.validate(req, schema);
}

module.exports = validateAuth;