require('dotenv').config();
const express = require('express');
const app = express();

var port = process.env.PORT || 80
var requestcount = 0;

app.get('/', function (req, res) {
  console.log("###### ANSWERING REQUEST NUMBER " + requestcount);
  var code = req.query.code;
  if (code == undefined) {
    console.log("Status code missing in request.");
    res.statusCode = 200;
    res.write("add ?code=404 to your request url to get a 404")
    
    res.send();
  }
  else {
    console.log("Got request for status code " + code);
    res.statusCode = code;
    console.log("Answering with status code " + code);
    res.write("You asked for " + code + " and you got " + code);
    res.send();
  }
  
  console.log("Request Number " + requestcount + " finished.#####");
});

app.listen(port);
console.log("running & listening on " + port + ". Change the port by adding an environment variable PORT.")