## Siri

A mini project to practice basic Node.JS fundamentals and server-side programming.

#### Objectives
Use Node.JS to build a simple socket server that responds to commands with text.

#### Step 1: Check out the Web Client
Navigate to <http://devmountain.github.io/Siri-client/>. This is a really simple Angular app that needs its back end completed. So far you can send messages, but there are no replies coming back. We're going to build the reply part.

#### Step 2: Create server.js
Before we start coding we need to run through some basic app setup. First of all, in your command line inside your project directory run an `npm init` command. This will create a package.json file for you and allow you to save npm dependencies. Before installing anything, we'll want to add a gitignore, so we're not committing massive amounts of dependencies to your repo.

```shell
echo "node_modules/" > .gitignore

```

It would be a good idea to add .DS_Store (and any other platform-specific binaries and potential security risks) to your gitignore as well.

Now we can run `npm install express --save`.

Create a server.js file in your repo and begin next steps:
* Require the 'express' module by using the require function and assigning the result to a variable. `var express = require('express')`
* Now you will need to initialize express using `var app = express()`
* Create a server that listens on port 8887 by using `app.listen(8887)`. Note that the listen method can also take a callback function as a second argument, this is frequently used to console log a success message. Add this like so:
```javascript
app.listen(8887, function() {
    console.log('Listening on port 8887');
});
```

* Now each time you run your server your message will print to the terminal.

* Now that you have the basics of your server set up, run `npm install nodemon --save-dev`.

* Start monitoring with `nodemon server.js` inside your project directory and check that your console prints out `Listening on 8887`.

#### Step 3: The GET call
The Siri-client is looking for a connection on port 8887 and will try to send a GET request to get a message.
* Create an array of messages that Siri might say; for example:

```javascript
var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];
```

* When a GET request comes in, have your server reply back with a random message from that array. Send it back in an object, like so: `{message: 'hello'}`

* Don't forget, to make sure this is valid JSON. Let's use the built-in `JSON.stringify` method to convert our object to JSON:

```javascript
app.get('/', function(req, res) {
  res.send(JSON.stringify({
    message: getRandomMessage()
  }))
});
```

* To test this yourself, use Postman to create a GET request to your server. Make sure it returns the object containing the message.

#### Step 4: Cleaning Up
If your Postman request is working, _**great!**_ You'll notice that the Siri client isn't yet working. This is because browsers are very careful about data they get from other domains; cross-domain requests are an easy exploit target. So we need to add in an extra call that the browser is making so it will allow data to come from our server.

* If the request's method is OPTIONS (this is the call the browser makes to check if the site we're getting data from allows cross-origin requests), return the following header/response:

```javascript
app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});
```

You will need to add the same headers to your `app.get` method as well. It should look something like this:

```javascript
app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});
```

Now your server will work properly with the Siri client.
