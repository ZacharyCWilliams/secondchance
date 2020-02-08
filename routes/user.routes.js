module.exports = (app) => {
  const users = require('../controllers/user.controller.js');

  // Create a new citizen
  app.post('/users', users.create);

  // Get a single citizen
  app.get('/users/:userId', users.findOne);

  app.get('/users', users.findAll);

}