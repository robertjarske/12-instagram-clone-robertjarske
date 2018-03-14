var express = require('express'),
    cors = require('cors'),
    app = express();

var db = require('./db.js');

var UserController = require('./controllers/UserController');
var AuthController = require('./controllers/AuthController');
var PhotoController = require('./controllers/PhotoController');

app.use(cors()); // To make the client and server play nice across domains...

app.use('/users', UserController);
app.use('/auth', AuthController);
app.use('/photos', PhotoController);

module.exports = app;