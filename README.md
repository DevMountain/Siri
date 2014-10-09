Siri
======

A mini project to practice basic Node.JS fundamentals and server-side programming.

##Objectives
Use Node.JS to build a simple socket server that responds to commands with text.

##Step 1: Check out the Web Client
Navigate to http://siri-client.devmounta.in. This is a really simple Angular app that needs its back end completed. So far you can send messages, but there are no replies coming back. We're going to build the reply part.

##Step 2: Create server.js
Create a server.js file in your repo. Now next steps:
* Require the 'http' module (Remember, you require a module and capture it in a variable.)
* Create a server that listens on port 8887 ([remember](https://gist.github.com/cahlan/4a80fd0752a9f38052af)?).

##Step 3: the GET call
The Siri-client is looking for a connection on port 8887 and will try to send a GET request to get a message.
* Create an array of messages that Siri might say, for example:

```javascript
var messages = ["Hello there." "I'm sorry, I cannot take any requests at this time." "I can tell you how to do that."];
```

* When a GET request comes in, have your server reply back with a random message from that array. Just send back the string.
* Remember, you examine the request object in your server callback function and check to see which method was used. Then you can send a response.
