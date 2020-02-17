const jwt = require('jsonwebtoken');

//this function protects endpoints, pass auth as second argument to run this function
module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided');

  try {
    const decoded = jwt.verify(token, 'privatekey');
    req.user = decoded; // returns the decoded jwt signature user that created this token => {_id : user._id }
    next();
  }
  catch (ex) {
    res.status(400).send('Invalid token.');
  }
}

