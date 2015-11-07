var express = require('express');
var router = express.Router();
var http = require("http");
var request= require("request");



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('home route working');
  // res.send('route firing');
});




// router.get('/info', function (request, response) {

//   res.send('route working');
// //   var url = 'http://www.bea.gov/api/data/?&UserID=50AC26D0-78ED-4D74-A09F-F846D1A91EC5&method=GetData&datasetname=RegionalData&KeyCode=PCDPI_SI&GeoFIPS=STATE&Year=2012&ResultFormat=JSON&%27';
// // request(url, function (error, response, body) {
// //   if (!error && response.statusCode == 200) {
// //     var fbResponse = JSON.parse(body);
// //     console.log("Got a response: ", fbResponse);
// //   } else {
// //     console.log("Got an error: ", error, ", status code: ", response.statusCode);
// //   }
// // });


// });

module.exports = router;
