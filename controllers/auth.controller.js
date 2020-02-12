const _ = require('lodash');
const User = require('../models/user.model.js');
// const validateAuth = require('./auth.validator');
const bcrypt = require('bcrypt');
const Joi = require('joi');


exports.create = async (req, res) => {
  //validates req.body for all required properties
  const { error } = validateAuth(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //see if user email exists
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email');

  //check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  const token = user.generateAuthToken();
  res.send(token);
};


function validateAuth(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  }

  return Joi.validate(req, schema);
}


