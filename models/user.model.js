const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
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

UserSchema.methods.generateAuthToken = function() {
  //config.get is grabbing our key to be encrypted by jwt
  const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
  return token;
}

module.exports = mongoose.model('User', UserSchema);
module.exports.UserSchema = UserSchema;

