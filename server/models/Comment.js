var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  createdAt: String,
  author: String,
  authorAvatar: String, 
  content: String
});

mongoose.model('Comment', CommentSchema);

module.exports = mongoose.model('Comment');