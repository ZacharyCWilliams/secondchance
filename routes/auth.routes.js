module.exports = (app) => {
    const auth = require('../controllers/auth.controller.js');

    // check user auth
    app.post('/api/auth', auth.create);
}

//helpful codes
// 401 unathorized - use this if jsonwebtoken is invalid
// 403 forbidden - use this if jwt is valid..
// but still cant access because of lack of privelages (i.e. not an admin)