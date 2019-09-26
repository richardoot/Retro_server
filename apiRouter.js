//Imports
var express = require('express');
usersCtrl = require('./routes/usersController');

//Router
exports.router = (function() {
    var apiRouter = express.Router();

    //User routes
        apiRouter.route('users/register/').post(usersCtrl.register);
        apiRouter.route('users/login/').post(usersCtrl.login);
})();