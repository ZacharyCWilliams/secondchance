module.exports = (app) => {
  const citizens = require('../controllers/citizen.controller.js');

  // Create a new citizen
  app.post('/api/citizens', citizens.create);

  // Get a single citizen
  app.get('/api/citizens/:citizenId', citizens.findOne);

  // Get all citizens
  app.get('/api/citizens', citizens.findAll);
}