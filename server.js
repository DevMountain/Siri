var http = require('http');
var messages = ["Hello there." "I'm sorry, I cannot take any requests at this time." "I can tell you how to do that."];
var onRequest = function(req, res) {
    if (req.method == 'GET') {
      res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({message: messages[Math.floor(Math.random()*messages.length)]}));
    }
    if (req.method == 'OPTIONS') {
      res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      });
      res.end();
    }
}
http.createServer(onRequest).listen(8887);
