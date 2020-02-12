module.exports = (app) => {
  const users = require('../controllers/user.controller.js');
  const auth = require('../middleware/auth');


  // Create a new citizen
  app.post('/api/users', users.create);

  // Get a single citizen, need authorization to do this
  app.get('/api/users/me', auth, users.findOne);

  // Get all users
  app.get('/api/users', users.findAll);

}