module.exports = (app) => {
  const inmates = require('../controllers/inmate.controller.js');
  const auth = require('../middleware/auth');

  //only authorized admins can create inmates so we need auth here
  //supply auth to any route handler that you want to protect
  app.post('/api/inmates', auth, inmates.create);

  //Get a single inmate
  app.get('/api/inmates/:inmateId', inmates.findOne);

  // Get all inmates
  app.get('/api/inmates', inmates.findAll);
}