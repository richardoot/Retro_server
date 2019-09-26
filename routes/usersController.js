//Imports
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let models = require('../models');

//Routes
module.exports = {
    register: function(req, res) {
        //Params
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        var bio = req.body.bio;
        var isAdmin = req.body.isAdmin;

        if(email == null || username == null || passsword == null){
            return res.status(400).json({'error': 'missing parameters'});
        }

        //TODO verify pseudo length, mail regex, password etc

        models.User.findOne({
            attributes: ['email'],
            where: { email: email }
        })
        .then(function(userFound) {
            if (!userFound) {

                bcrypt.hash(password, 5, function( err, bcryptedPassword ) {
                    var newUser = models.User.create({
                        email: email,
                        username: username,
                        passsword: bcryptedPassword,
                        bio: bio,
                        isAdmin: 0
                    })
                });

            } else {

            }
        })
        .catch(function(err) {

        });
    },
    login: function(req,res) {
        //TODO
    }
}