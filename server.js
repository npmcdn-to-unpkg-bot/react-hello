var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

var port = 3000;
app.listen(port, function() {
  console.log('Express is up on port', port)
})