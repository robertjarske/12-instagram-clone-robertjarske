var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  name: {type: String, maxlength: [100, 'Are you insane? We can\'t handle that...']},
  username: {type: String, maxlength: [100, 'Are you insane? We can\'t handle that...']},
  email: String,
  password: {type: String, minlength: [8, 'Paswwords must contain at least 8 characters']}
});