const mongoose = require("mongoose");
const Joi = require('joi');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

function validateUser(user) {
  const schema = {
    username: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  }

  return Joi.validate(user, schema);
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255
  },
}, {
  timestamps: true
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, 'privatekey');
  return token;
}

const User = mongoose.model('User', userSchema);

exports.User = User;
exports.validateUser = validateUser;