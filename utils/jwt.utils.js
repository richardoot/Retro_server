// //Imports
// let jwt = require('jsonwebtoken');

// consst JWT_SIGN_SECRET = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjMyMDhmOGJlLWYyYWMtNDU2YS04YTMyLTViMTJkNWRiN2NmYiIsImlhdCI6MTU2OTU5NzI3OCwiZXhwIjoxNTY5NjAwODc4fQ.fnPd03M1jbuHzzjnL6xoT9twEPeexrbU2ODpE7WkWcc';

// //Exports
// module.exports = {
//     generateTokenForUser: function(userData) {
//         return jwt.sign({
//             userId: userData.id,
//             isAdmin: userData.isAdmin
//         },
//         JWT_SIGN_SECRET,
//         {
//             expiresIn: '1h'
//         })
//     }
// }