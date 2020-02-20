const winston = require('winston');
module.exports = function (err, req, res, next) {
  winston.log('error', err)
  res.status(500).send('Internal Server Error');
};