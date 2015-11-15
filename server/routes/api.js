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

function ifClicked (obj) {
  var search = "";
  var keys = Object.keys(obj);
  var state = obj[keys[keys.length -1]];
  var results = [state]
  for (i =0; i< keys.length; i++) {
     if(i < keys.length - 2 && keys[i] !== 'state') {
         search += obj[keys[i]]+','
     } else if(keys[i] !== 'state'){
      search += obj[keys[i]];
     }
  }

  results.push(search);
  return results;
}

function ifClickedCounty (obj) {
  var search = "";
  var keys = Object.keys(obj);
  var state = obj[keys[keys.length -1]];
  var county = obj[keys[keys.length -2]];
  var results = [state, county]
  for (i =0; i< keys.length; i++) {
     if(i < keys.length - 3 && keys[i] !== 'state' && keys[i] !== 'county') {
         search += obj[keys[i]]+','
     } else if(keys[i] !== 'state' && keys[i] !== 'county'){
      search += obj[keys[i]];
     }
  }

  results.push(search);
  return results;
}


router.get('/data/census/national', function(req, res, next) {
  console.log(req.query, "req query server side");

  ///function to build up url
  var queryBuild = ifClicked(req.query);
  console.log(queryBuild, "query string builder");

  var queryCodes = queryBuild[1];


  var url = "http://api.census.gov/data/2013/acs1/profile?get=NAME,"+queryCodes+"&for=us:*&key="+CENS_id;
  console.log(url, "url")
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

router.get('/data/census/state', function(req, res, next) {
  console.log(req.query, "req query server side");

  ///function to build up url
  var queryBuild = ifClicked(req.query);
  console.log(queryBuild, "query string builder");
  var state = queryBuild[0];
  var queryCodes = queryBuild[1];
  console.log(state, "state");
  console.log(queryCodes, "query codes");

  var url = "http://api.census.gov/data/2013/acs1/profile?get=NAME,"+queryCodes+"&for=state:"+state+"&key="+CENS_id;
  console.log(url, "url state")
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

router.get('/data/census/county', function(req, res, next) {
  console.log(req.query, "req  county query server side");

  ///function to build up url
  var queryBuild = ifClickedCounty(req.query);
  console.log(queryBuild, "query string builder");
  var state = queryBuild[0];
  var county = queryBuild[1];
  var queryCodes = queryBuild[2];
  console.log(state, "state");
  console.log(queryCodes, "query codes");

  var url = "http://api.census.gov/data/2013/acs1/profile?get=NAME,"+queryCodes+"&for=county:"+county+"&in=state:"+state+"&key="+CENS_id;
  console.log(url, "url");
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

