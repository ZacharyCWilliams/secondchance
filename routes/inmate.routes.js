module.exports = (app) => {
  const inmates = require('../controllers/inmate.controller.js');

  // Create a new inmate
  app.post('/inmates', inmates.create);

  // Get a single inmate
  app.get('/inmates/:inmateId', inmates.findOne);

  // Get all inmates
  app.get('/inmates', inmates.findAll);
}