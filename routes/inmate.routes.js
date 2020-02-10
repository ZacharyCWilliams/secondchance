module.exports = (app) => {
  const inmates = require('../controllers/inmate.controller.js');
  const auth = require('../middleware/auth');

  app.post('/api/inmates', auth, inmates.create);

  //Get a single inmate
  app.get('/api/inmates/:inmateId', inmates.findOne);

  // Get all inmates
  app.get('/api/inmates', inmates.findAll);
}