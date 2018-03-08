var app = require('./index.js');
var port = 3001;

var server = app.listen(port, function() {
  console.log('express is running on port http://localhost:' + port);
});