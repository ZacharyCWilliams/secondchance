const _ = require('lodash');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user.model.js');
const validateUser = require('../middleware/user.validator');
const bcrypt = require('bcrypt');

exports.create = async (req, res) => {
  //validates req.body for all required properties
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //see if user already exists
  let user = await User.findOne({email: req.body.email});
  if (user) return res.status(400).send('User already registered');

  user = new User(_.pick(req.body, ['username', 'email', 'password']))
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  //save the new user
  await user.save();

  const token = user.generateAuthToken();
  res.header('x-auth-token',token).send(_.pick(user, ['_id', 'username', 'email']));
};

exports.findOne = async (req, res) => {
  let user = await User.findOne({email: req.body.email});
  res.send(user);
};

exports.findAll = async (req, res) => {
  const users = await User.find();
  res.send(users);
};