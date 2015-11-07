var express = require('express');
var router = express.Router();
var request = require('request');
var http = require('http');

var id = process.env.ID;


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('home route working');
});




router.get('/info', function(req, res, next) {
  var url = "http://www.bea.gov/api/data/?&UserID="+id+"&method=GetData&datasetname=RegionalData&KeyCode=PCDPI_SI&GeoFIPS=STATE&Year=2012&ResultFormat=JSON&%27";

  http.get(url, function(response) {
      var body = '';

      response.on('data', function(chunk) {

        body += chunk;
      });

      response.on('end', function() {

        res.send(JSON.parse(body));
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });




});




module.exports = router;

