var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded( {extended: false} ));
router.use(bodyParser.json());
var User = require('../models/User');

router.get('/', function(req, res) {
  User.find({}, function(error, users) {
    if(error) {
      return res.status(500).send("Couldn't get users from server");
    } else {
        res.status(200).send(users);
    }
  })
});

router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(error, user) {
    if(error) {
      return res.status(500).send("Couldn't find the user");
    } else {
        res.status(200).send(user);
    }
  })
});

router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id, function(error, user) {
    if(error) {
      return res.status(500).send("Couldn't delete the user");
    } else {
        res.status(200).send('succsessfully deleted ' + user);
    }
  })
});

router.put('/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(error, user) {
    if(error) {
      return res.status(500).send("Couldn't update the user");
    } else {
        res.status(200).send('successfully updated' + user);
    }
  })
});

module.exports = router;