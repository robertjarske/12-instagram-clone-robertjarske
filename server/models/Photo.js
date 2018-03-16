var mongoose = require('mongoose');

var PhotoSchema = new mongoose.Schema({
  createdAt: String,
  imageUrl: String, 
  comments: Array,
  likes: Array,
  uploader: String,
  uploaderId: String,
  uploaderAvatar: String
});

mongoose.model('Photo', PhotoSchema);

module.exports = mongoose.model('Photo');