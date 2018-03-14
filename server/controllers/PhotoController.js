var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var config = require("../config");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Photo = require("../models/Photo");
// var Comment = require('../models/Comment');

router.get("/", function(req, res) {
  Photo.find({})
    .sort({ createdAt: -1 })
    .exec(function(error, photos) {
      if (error) {
        return res
          .status(500)
          .send("An error occured when getting the photos from the server");
      } else {
        res.status(200).send(photos);
      }
    });
});

router.post("/store", function(req, res) {
  Photo.create(
    {
      createdAt: req.body.createdAt,
      imageUrl: req.body.imageUrl,
      comments: req.body.comments,
      likes: req.body.likes,
      uploader: req.body.uploader
    },
    function(error, photo) {
      if (error) {
        return res
          .status(500)
          .send("An error occurred when trying to store the photo " + error);
      } else {
        res.status(200).send({ stored: true, photo: photo });
      }
    }
  );
});

router.put("/:photoId/likes/:userId", function(req, res) {
  Photo.findById(req.params.photoId, function(error, photo) {
    var index = photo.likes.indexOf(req.params.userId);

    if (index !== -1) {
      console.log("found you!");
      Photo.findByIdAndUpdate(
        req.params.photoId,
        { $pull: { likes: req.params.userId } },
        {new: true},
        function(error, photo) {
          return res
            .status(200)
            .send({ msg: "Removed like from photo ", photo: photo });
        }
      );
    } else {
      Photo.findByIdAndUpdate(
        req.params.photoId,
        { $push: { likes: [req.body.userId] } },
        { new: true },
        function(error, photo) {
          if (error) {
            return res.status(500).send("Couldn't add the like");
          } else {
            return res
              .status(200)
              .send({ msg: "successfully added a like to ", photo: photo });
          }
        }
      );
    }
  });
});

module.exports = router;
