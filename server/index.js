var express = require('express'),
    app = express();

var db = require('./db.js');

var UserController = require('./controllers/UserController');
var AuthController = require('./controllers/AuthController');

app.use('/users', UserController);
app.use('/auth', AuthController);

module.exports = app;