var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var config = require("../config");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Photo = require("../models/Photo");

router.get('/', function(req, res) {
  Photo.find({}, function(error, photos) {
    if(error) {
      return res.status(500).send("An error occured when getting the photos from the server");
    } else {
        res.status(200).send(photos);
    }
  })
});

router.post("/store", function(req, res) {
  Photo.create({
    createdAt: req.body.createdAt,
    imageUrl: req.body.imageUrl, 
    comments: req.body.comments,
    likes: req.body.likes,
    uploader: req.body.uploader
    }, function(error, photo) {
      if (error) {
        return res.status(500).send("An error occurred when trying to store the photo " + error);
      } else {
        res.status(200).send({ stored: true, photo: photo });
      }
    }
  );
});

module.exports = router;