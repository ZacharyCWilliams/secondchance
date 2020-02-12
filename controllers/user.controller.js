const _ = require('lodash');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const Joi = require('joi');

//look up how to delete token from client to logout, this is not handled by server



exports.create = async (req, res) => {
  //validates req.body for all required properties
  const { error } = validateUser(req.body);

  if (error) {
    console.log('im error',error.details[0].message);
    return res.status(400).send(error.details[0].message);
  }


  //see if user already exists
  let user = await User.findOne({email: req.body.email});
  if (user) return res.status(400).send('User already registered');

  user = new User(_.pick(req.body, ['username', 'email', 'password']))
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  //save the new user
  await user.save();

  //when user is created they are automatically authorized as
  //logged in via given their auth token on creation

  const token = user.generateAuthToken();
  //use x- prefix for any custom headers we set
  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'username', 'email']));
};

exports.findOne = async (req, res) => {
  //excludes returning the password
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
};

exports.findAll = async (req, res) => {
  const users = await User.find().select('-password');
  res.send(users);
};


function validateUser(user) {
  const schema = {
    username: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  }

  return Joi.validate(user, schema);
}



