const { User, validateUser } = require('../models/user.model.js');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const bcrypt = require('bcrypt');
const _ = require('lodash');

//POST a new user
router.post('/', async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({email: req.body.email});
  if (user) return res.status(400).send('User already registered');

  user = new User(_.pick(req.body, ['username', 'email', 'password']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'username', 'email']));
});


//GET all users
router.get('/', async (req, res) => {

    const users = await User.find().select('-password');
    res.send(users);
});

//GET a single user
router.get('/me', auth, async (req, res) => {
  // get id from json webtoken with user._id

  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});


//UPDATE a user
router.put('/:id', async (req, res) => {
  let user = User.findByIdAndUpdate(req.params.id);
  if (!user) return res.status(400).send('The user was not found');
  res.send(user);
});

//DELETE a user
router.delete('/:id', async (req, res) => {
  let user = User.findByIdAndRemove(req.params.id);
  if (!user) return res.status(400).send('The user was not found');
  res.send(user);
});


module.exports = router;