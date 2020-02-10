module.exports = (app) => {
  const users = require('../controllers/user.controller.js');

  // Create a new citizen
  app.post('/api/users', users.create);

  // Get a single citizen
  app.get('/api/users/:userId', users.findOne);

  // Get all users
  app.get('/api/users', users.findAll);

}