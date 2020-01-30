module.exports = (app) => {
  const citizens = require('../controllers/citizen.controller.js');
  // Create a new Player
  app.post('/citizens', citizens.create);
}