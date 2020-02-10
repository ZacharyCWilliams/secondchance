module.exports = (app) => {
    const auth = require('../controllers/auth.controller.js');

    // check user auth
    app.post('/api/auth', auth.create);
}