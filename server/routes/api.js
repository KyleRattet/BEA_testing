var express = require('express');
var router = express.Router();
var request = require('request');
var http = require('http');

var BEA_id = process.env.BEA_ID;
var CENS_id = process.env.CENS_ID;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('home route working');
});




router.get('/data/bea', function(req, res, next) {
  var url = "http://www.bea.gov/api/data/?&UserID="+BEA_id+"&method=GetData&datasetname=RegionalData&KeyCode=PCDPI_SI&GeoFIPS=STATE&Year=2012&ResultFormat=JSON&%27";

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

router.get('/data/census', function(req, res, next) {
  var url = "http://api.census.gov/data/2010/sf1?key="+CENS_id+"&get=PCT012A015,PCT012A119&for=state:01";

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

//GDP By Industry Query
var url = "http://www.bea.gov/api/data/?&UserID="+BEA_id+"&method=GetData&DataSetName=GDPbyIndustry&Year=2012,2011&Industry=ALL&tableID=1&Frequency=A&ResultFormat=json";

module.exports = router;

