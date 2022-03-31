var http = require('http');
var dt = require('./pasta/module.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("data e tempo é: " + dt.myDateTime());
  res.end();
}).listen(8080);




