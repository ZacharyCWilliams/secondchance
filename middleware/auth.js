const jwt = require('jsonwebtoken');
const config = require('config');
//we use this to protect routes by checking header has auth token only given when
// user has signed up or logged in

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided');

  try {
    // verifys our jsonwebtoken if its valid..it will decode it and return payload
    //if not valid it will throw exception so we wrap in try catch block
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    //makes payload reachable through req.user._id
    req.user = decoded;

    //we are done so we pass control to next middleware function in req response lifecycle
    next();
  }
  //ex short for exception
  // this error will help us identify why we cant access an end point form client
  catch (ex) {
    res.status(400).send('Invalid token.');
  }
}

