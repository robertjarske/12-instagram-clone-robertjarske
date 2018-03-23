var jwt = require('jsonwebtoken');
var config = require('../config');
var User = require('../models/User');

function tokenVerify(req, res, next) {
  
  var token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).send({
      authenticated: false,
      message: "Unauthorized. No token provided"
    });
  }

  jwt.verify(token, config.secret, function(err, decodedToken) {
    if (err) {
      let message = '';
      // Todo: Add the other cases here, give them custom messages?
      switch (err.name) {
        case 'TokenExpiredError':
          message = 'The token has expired'
          break;
        case 'JsonWebTokenError':
        message = 'There seems to be an error with your token, please logout and login again'
        default:
          message = 'An error occurred when trying to authenticate token'
          break;
      }

      return res.status(500).send({
        authenticated: false,
        message: message
      });
    }

    User.findById(decodedToken.id)
      .then(user => {
        req.user = user;
        req.userId = decodedToken.id;

        next();
      })

  });

}

module.exports = tokenVerify;