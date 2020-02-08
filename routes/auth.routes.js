module.exports = (app) => {
    const auth = require('../controllers/auth.controller.js');

    // Create a new citizen
    app.post('/auth', auth.create);

}