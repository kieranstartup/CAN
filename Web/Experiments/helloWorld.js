var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Hello World 2.0\n');

}).listen(PORT_THE_APPLICATION_WAS_ASSIGNED_HERE, '127.0.0.1');

console.log('Server running at http://127.0.0.1:23102/');