var express = require('express');
var path = require('path');
var chalk = require('chalk');
var http = require('http');
var request = require('request');

module.exports = function (config) {
  var defaultConfig = {
    root: __dirname,
    port: 3000,
    host: '0.0.0.0'
  }

  config = Object.assign(defaultConfig, config);

  var app = express();

  app.use(express.static(config.root));

  app.get("*", function(req, res){
    res.sendFile(path.resolve(config.root + '/index.html'));
  });

  app.post("/mailsignup/:id", function(req, res){

	console.log(req);
	res.send('done').status(200)
})

  var server = http.createServer(app);

  server.listen(config.port, config.host);

  console.log((chalk.cyan('Server started at http://' + config.host + ':' + config.port)));
}


// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://us8.api.mailchimp.com/3.0/lists/e5e0ad4942/members',
//   headers:
//    { 'cache-control': 'no-cache',
//      'content-type': 'application/json',
//      authorization: 'apikey b3e1c17fa3f9c58167bd1fe7c633261a-us8' },
//   body: '{\n"email_address": "notewrangler@att.net",\n"email_type": "html", \n"status": "subscribed",\n"merge_fields": {\n    "FNAME": "Joey",\n    "LNAME": "Blowey",\n    "STREET1": "1234 Main",\n    "CITY": "Muncie",\n    "STATE": "Indiana",\n    "POSTALCODE": "47303"\n    "PNONENUM": ""\n},\n"language": "",\n"vip": false\n}' };
//
// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//
//   console.log(body);
// });
