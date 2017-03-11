

var http = require('http');

var messages = ["What's Cookin' Good Lookin'?", "Guess WhooOoo", "Oh, Cry me a River...", "Ain't noboby Knows That!"]

var randomMessage = function(arr){
	var num = Math.floor(Math.random()*(messages.length));
	return arr[num];
}

var onRequest = function(req, res){
	if(req.method === 'GET'){
		res.writeHead(200, {
			'Connection': 'close',
 			'Content-Type': 'application/json',
  			'Access-Control-Allow-Origin': '*',
  		});
		res.end(JSON.stringify({message: randomMessage(messages)}))
	}
	else if (req.method === 'OPTIONS') {
		res.whiteHead(200, {
			'Connection': 'close',
 			'Content-Type': 'application/json',
  			'Access-Control-Allow-Origin': '*',
  			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		})
		res.end();
	}
};


console.log('listening on Port ' + 8887 + " Like a boss");
http.createServer(onRequest).listen(8887);
