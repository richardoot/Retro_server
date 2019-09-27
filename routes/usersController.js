//Imports
 let bcrypt = require('bcryptjs');
//  let jwtUtils = require('../jwt.utils')
 let models = require('../models');

console.log('DEBUG 2');


//Routes
module.exports = {
    register: function(req, res) {
    
         //Params
         var email = req.body.email;
         var username = req.body.username;
         var password = req.body.password;
         var bio = req.body.bio;


         if(email == null || username == null || password == null){
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
                         password: bcryptedPassword,
                         bio: bio,
                         isAdmin: 0
                     })
                     .then(function(newUser) {
                         return res.status(201).json({
                             'userId': newUser.id
                         })
                     })
                     .catch(function(err){
                         return res.status(500).json({ 'error': 'cannot add user' });
                     });
                 });

             } else {
                 return res.status(409).json({ 'error': 'User already exist' });
             }
         })
         .catch(function(err) {
             return res.status(500).json({ 'error': 'unable to verify user'});
         });
    },
    login: function(req,res) {
        //Params
            var email = req.body.email;
            var password = req.body.password;

        //Verif
            if(email == null || password == null){
                return res.status(400).json({ 'error': 'please enter your login and password' });
            }

            models.User.findOne({
                attributes: ['email'],
                where: {email: email}
            })
            .then(function(userFound){
                if(userFound){
                    bcrypt.compare(password, userFound.password, function(errBcrypt, resBcrypt) {
                        if(resBcrypt) {
                            return res.status(200).json({
                                'idUser': userFound.id,
                                'token': 'THE TOKEN'
                                // 'token': jwtUtils.generateTokenForUser(userFound)
                            });
                        } else {
                            return res.status(400).json({ 'error': 'invalid password' });
                        }
                    });
                } else {
                    return res.status(400).json({ 'error': 'login invalid' });
                }
            })
            .catch(function(err) {
                return res.status(500).json({ 'error': 'unable to verify user' });
            });
    }
}