var fs = require('fs');
var express = require('express');
var fileName = 'index.html'; 
var app = express.createServer(express.logger());
var text = fs.readFileSync(fileName, 'utf-8'); 
app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
