var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var config = require("../config");
var tokenVerify = require('../middleware/TokenVerify');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var User = require("../models/User");

router.post("/login", function(req, res) {
  User.findOne({ email: req.body.email }, function(error, user) {
    if (error) {
      res.status(500).send("An error occurred when trying to log in");
    }

    if (!user) {
      res.status(404).send("No registered user found with that email");
    }

    var isValidPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!isValidPassword) {
      res.status(401).send({
        authenticated: false,
        token: null
      });
    }

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400
    });

    res.status(200).send({
      authenticated: true,
      token: token
    });
  });
});

router.post("/register", function(req, res) {
  User.create({
      name: req.body.name,
      username: req.body.username,
      avatar: 'https://api.adorable.io/avatars/285/' + req.body.name + '@adorable.png',
      email: req.body.email,
      password: req.body.password
    }, function(error, user) {
      if (error) {
        return res.status(500).send("An error occurred when trying to register the user " + error);
      } else {
        //create JWT token
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400
        });
        res.status(200).send({ authenticated: true, token: token });
      }
    }
  );
});

router.get("/me", tokenVerify, function(req, res) {
    User.findById(req.userId, { password: 0 }, function(error, user) {
      if (error) {
        res.status(500).send("An error occured when trying to find the user");
      }

      if (!user) {
        res.status(404).send("User not found");
      }

      res.status(200).send({
        authenticated: true,
        user: user
      });
    });
});

module.exports = router;
