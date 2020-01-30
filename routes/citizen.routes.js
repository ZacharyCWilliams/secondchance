module.exports = (app) => {
  const citizens = require('../controllers/citizen.controller.js');

  // Create a new citizen
  app.post('/citizens', citizens.create);
  // Get a new citizen
  app.get('/citizens/:citizenId', citizens.findOne);
}