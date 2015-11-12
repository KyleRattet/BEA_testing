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
  var amount = req.query.amount;
  console.log(amount, "amount server side");
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

    // var url2 = "http://www.bea.gov/api/data/?&UserID="+BEA_id+"&method=GetData&DataSetName=GDPbyIndustry&Year=2012,2011&Industry=ALL&tableID=1&Frequency=A&ResultFormat=json";

    // http.get(url2, function(response) {
    //   var body = '';

    //   response.on('data', function(chunk) {

    //     body += chunk;
    //   });

    //   response.on('end', function() {

    //     res.send(JSON.parse(body));
    //   });
    // }).on('error', function(e) {
    //   console.log("Got error: " + e.message);
    // });


});

router.get('/data/census', function(req, res, next) {
  console.log(req.query, "req query server side");
  var state = req.query.state;
  var popCode = req.query.population;
  console.log(popCode, "population code");
  console.log(state, "state from server side");
  // var url = "http://api.census.gov/data/2010/sf1?key="+CENS_id+"&get=PCT012A015,PCT012A119&for=state:"+state;
  var url = "http://api.census.gov/data/2013/acs5?get=NAME,"+popCode+"&for=state:"+state+"&key="+CENS_id;

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


//Alabama Population (state code 01)


//Colorado Population (state code 08)
var url = "http://api.census.gov/data/2013/acs5?get=NAME,B01001_001E&for=state:08&key="+CENS_id;


//GDP By Industry Query
var url = "http://www.bea.gov/api/data/?&UserID="+BEA_id+"&method=GetData&DataSetName=GDPbyIndustry&Year=2012,2011&Industry=ALL&tableID=1&Frequency=A&ResultFormat=json";

//BEA disposable person INCOME
 var url = "http://www.bea.gov/api/data/?&UserID="+BEA_id+"&method=GetData&datasetname=RegionalData&KeyCode=PCDPI_SI&GeoFIPS=STATE&Year=2012&ResultFormat=JSON&"

//total state population?
var url = "http://api.census.gov/data/2013/acs5?get=NAME,B01001_001E&for=state:*&key="+CENS_id;


//total science and engineering, total bachelor's degrees reported
var url = "http://api.census.gov/data/2013/acs5?get=NAME,B15012_002E&for=state:*&key="+CENS_id;

module.exports = router;

