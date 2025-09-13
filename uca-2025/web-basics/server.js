var express = require('express');
var app = express();

var port = 8080;

app.use(express.static('frontend'));

app.listen(port, function() {
  console.log('Server is running on http://localhost:' + port);
});

app.get('/data', function(req, res) {
  res.send({message: "hello world" });
})

