//Imports
var express = require('express');

console.log('DEBUG 1');

usersCtrl = require('./routes/usersController');

console.log('DEBUG 3');


//Router
exports.router = (function() {
    var apiRouter = express.Router();

    console.log('DEBUG 4');

    //User routes
        apiRouter.route('/users/register/').post(usersCtrl.register);
        apiRouter.route('/users/login/').post(usersCtrl.login);

    return apiRouter;
})();