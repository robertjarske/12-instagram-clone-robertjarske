var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var config = require("../config");
var multer = require('multer');
var tokenVerify = require('../middleware/TokenVerify');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, req.params.userId + '_' + Date.now() + file.originalname)
  }
})

var upload = multer({storage: storage});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Photo = require("../models/Photo");
var Comment = require('../models/Comment');

/** Gets all photos from mLab */
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

/** Photo uploads uses tokenVerify to get the user */
router.post("/uploads/:userId", tokenVerify, upload.single('photo'), function(req, res, next) {
  Photo.create(
    {
      createdAt: new Date(),
      imageUrl: '/' + req.file.path,
      comments: req.body.comments,
      likes: req.body.likes,
      uploader: req.user.username,
      uploaderId: req.user._id,
      uploaderAvatar: req.user.avatar
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

router.put("/:photoId/likes/:userId", tokenVerify, function(req, res) {
  /** First find the id of the photo where the user want to put their like */
  Photo.findById(req.params.photoId, function(error, photo) {
    
    /** Then we have to check if the user already has like the photo, the likes is an array of userId:s */
    var index = photo.likes.indexOf(req.params.userId);

    /**If the user have liked the photo we get the index, otherwise we get -1 as index */
    if (index !== -1) {
      Photo.findByIdAndUpdate(
        req.params.photoId,
        { $pull: { likes: req.params.userId } },
        {new: true},
        function(error, photo) {
          return res
            .status(200)
            .send({ msg: "Removed your like from the photo", photo: photo });
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
              .send({ msg: "Successfully added a like to the photo", photo: photo });
          }
        }
      );
    }
  });
});

/** Store user comments */
router.post('/:photoId/comments/:userId', tokenVerify, function(req, res) {
  Comment.create(
    {
      createdAt: new Date(),
      author: req.body.author, 
      content: req.body.content
    },
    function(error, comment) {
      if (error) {
        return res
          .status(500)
          .send("An error occurred when trying to create the comment " + error);
      } else {
        Photo.findByIdAndUpdate(
          req.params.photoId, 
          {$push: {comments: [comment]}}, 
          {new: true},
          function(error, photo) {
            if (error) {
              return res.status(500).send("An error occurred when trying to comment the photo " + error)
            } else {
              return res.status(200).send({msg:'Comment was successfully stored', photo: photo})
            }
      
        })
      }

    }
  );

})

module.exports = router;
